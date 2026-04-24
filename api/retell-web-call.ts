/**
 * Vercel Edge Function — creates a short-lived Retell web-call access token.
 *
 * Why this lives server-side: the Retell REST API uses a secret API key that
 * MUST NOT ship to the browser (unlike Vapi public keys). This function reads
 * RETELL_API_KEY from environment and never exposes it to the client.
 *
 * The agent_id is hardcoded here (not taken from the request) so the public
 * endpoint can only create calls for this specific Istueta demo agent.
 */

export const config = {
  runtime: "edge",
};

const AGENT_ID = "agent_15948aa132e2b81248586bda6f"; // Istueta — Carlos

function corsHeaders(): HeadersInit {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), "Content-Type": "application/json" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) {
    return json({ error: "Server misconfigured: RETELL_API_KEY missing" }, 500);
  }

  try {
    const resp = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id: AGENT_ID }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      return json(
        { error: "Retell API error", status: resp.status, detail },
        resp.status
      );
    }

    const data = (await resp.json()) as {
      access_token?: string;
      call_id?: string;
    };

    if (!data.access_token) {
      return json({ error: "No access_token in Retell response" }, 502);
    }

    return json({
      access_token: data.access_token,
      call_id: data.call_id,
    });
  } catch (err) {
    return json(
      { error: "Upstream fetch failed", detail: String(err) },
      502
    );
  }
}
