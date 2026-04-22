/**
 * Vapi configuration for the Istueta pitch site.
 * Pattern matches kivo-web (eduardoivan86/kivo-web · lib/vapi.ts) so the
 * voice-agent integration behaves the same way on both sites.
 *
 * The public key is safe to ship in client source — it's the shared
 * browser-side key for Eduardo's Vapi account. Private keys never leave
 * the server.
 */
export const VAPI_PUBLIC_KEY = "bfe6f456-61b5-4aad-a5fb-053003aeae94";

/** Istueta assistant: "Carlos" (bilingual senior roofing expert). */
export const ASSISTANT_ID = "df02ceb7-32b2-4a71-9ff5-d9c22edc9f68";

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
 * Best-effort Vapi error describer. Vapi errors nest HTTP bodies / stack
 * heads in different shapes depending on the stage (start, websocket,
 * call-start-failed), so we surface every known key plus a raw snapshot.
 * Lifted from kivo-web for consistent error reporting.
 */
export function describeVapiError(err: unknown): string {
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

  if (e.error && typeof e.error === "object") {
    const raw = safeStringify(e.error, 280);
    if (raw && raw !== "{}") parts.push(`raw=${raw}`);
  }

  if (parts.length) return parts.join(" · ").slice(0, 500);

  const whole = safeStringify(err, 500);
  return whole || "unknown error (non-serializable)";
}
