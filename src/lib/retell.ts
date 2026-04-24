/**
 * Retell configuration for the Istueta pitch site.
 * Replaces the previous Vapi integration.
 *
 * Key architectural difference from Vapi: Retell's API key is secret and lives
 * ONLY on the server (see api/retell-web-call.ts). The browser hits that
 * endpoint to get a short-lived access_token, then hands it to the Retell
 * Web SDK. The agent_id is public and lives here for reference only — the
 * backend also pins it, so even if this file were tampered with, calls still
 * route to the Istueta demo agent.
 */

/** Istueta assistant: "Carlos" (bilingual senior roofing expert). */
export const AGENT_ID = "agent_15948aa132e2b81248586bda6f";

/** Backend endpoint that returns a short-lived Retell access token. */
export const RETELL_TOKEN_ENDPOINT = "/api/retell-web-call";

export type VoiceStatus = "connecting" | "listening" | "speaking" | "thinking";

function safeStringify(value: unknown, max = 400): string {
  try {
    const seen = new WeakSet();
    const out = JSON.stringify(value, (_k, v) => {
      if (typeof v === "object" && v !== null) {
        if (seen.has(v)) return "[circular]";
        seen.add(v);
      }
      return v;
    });
    if (!out) return "";
    return out.length > max ? out.slice(0, max) + "…" : out;
  } catch {
    return "";
  }
}

/**
 * Best-effort Retell error describer. Mirrors the Vapi version so the UI
 * behavior on the fallback screen stays identical.
 */
export function describeRetellError(err: unknown): string {
  if (!err) return "";
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message || err.name;
  if (typeof err !== "object") return String(err);

  const parts: string[] = [];
  const push = (label: string, value: unknown) => {
    if (typeof value === "string" && value) parts.push(`${label}=${value}`);
    else if (typeof value === "number" || typeof value === "boolean") {
      parts.push(`${label}=${value}`);
    }
  };

  const KEYS = [
    "name",
    "type",
    "action",
    "stage",
    "errorMsg",
    "errorDetail",
    "message",
    "msg",
    "description",
    "reason",
    "code",
    "statusCode",
    "status",
  ];
  const pickFrom = (obj: Record<string, unknown>, prefix = "") => {
    for (const key of KEYS) push(`${prefix}${key}`, obj[key]);
  };

  const e = err as Record<string, unknown>;
  pickFrom(e);
  if (e.error && typeof e.error === "object") {
    pickFrom(e.error as Record<string, unknown>, "error.");
  } else if (typeof e.error === "string") {
    push("error", e.error);
  }
  if (e.context && typeof e.context === "object") {
    const ctx = e.context as Record<string, unknown>;
    for (const [k, v] of Object.entries(ctx)) push(`ctx.${k}`, v);
  }

  if (parts.length) return parts.join(" · ").slice(0, 500);

  const whole = safeStringify(err, 500);
  return whole || "unknown error (non-serializable)";
}

/**
 * Hit our backend to get a short-lived Retell access token.
 * Throws on non-2xx so the caller can surface the error.
 */
export async function fetchRetellAccessToken(): Promise<string> {
  const resp = await fetch(RETELL_TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`token endpoint ${resp.status}: ${text || resp.statusText}`);
  }

  const data = (await resp.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("token endpoint returned no access_token");
  }
  return data.access_token;
}
