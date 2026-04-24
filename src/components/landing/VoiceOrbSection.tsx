import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, PhoneOff } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { RetellWebClient } from "retell-client-js-sdk";
import {
  AGENT_ID,
  describeRetellError,
  fetchRetellAccessToken,
  type VoiceStatus,
} from "@/lib/retell";

type Phase = "idle" | "active" | "fallback";
type FallbackReason = "error" | "ended";

export const VoiceOrbSection = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("connecting");
  const [fallbackReason, setFallbackReason] = useState<FallbackReason>("ended");
  const [errorDetail, setErrorDetail] = useState<string>("");
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const retellRef = useRef<RetellWebClient | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    return () => {
      if (retellRef.current) {
        try {
          retellRef.current.stopCall();
        } catch {
          /* no-op: component unmounting */
        }
        retellRef.current = null;
      }
    };
  }, []);

  const goToFallback = useCallback((reason: FallbackReason) => {
    setFallbackReason(reason);
    setPhase("fallback");
    setVolumeLevel(0);
    setTimeout(() => setPhase("idle"), reason === "error" ? 3000 : 1500);
  }, []);

  const startConversation = useCallback(async () => {
    if (phaseRef.current === "active") return;

    if (!AGENT_ID) {
      setErrorDetail("Retell config missing");
      goToFallback("error");
      return;
    }

    setPhase("active");
    setVoiceStatus("connecting");
    setErrorDetail("");

    try {
      // Step 1: ask our backend for a short-lived access token.
      const accessToken = await fetchRetellAccessToken();

      // Step 2: load the SDK (dynamic import keeps the initial bundle small).
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const retell = new RetellWebClient();
      retellRef.current = retell;

      // Lifecycle
      retell.on("call_started", () => {
        setVoiceStatus("listening");
      });

      retell.on("agent_start_talking", () => {
        setVoiceStatus("speaking");
      });

      retell.on("agent_stop_talking", () => {
        setVoiceStatus("listening");
      });

      // Volume: Retell doesn't emit a normalized volume-level like Vapi, but
      // with emitRawAudioSamples: true it gives us the agent's raw PCM audio
      // as Float32Array. We compute RMS per chunk and normalize it into the
      // same 0..1 range Vapi used so the scale math below doesn't change.
      retell.on("audio", (audio: Float32Array) => {
        if (!audio || audio.length === 0) return;
        let sumSquares = 0;
        for (let i = 0; i < audio.length; i++) {
          sumSquares += audio[i] * audio[i];
        }
        const rms = Math.sqrt(sumSquares / audio.length);
        // ~4x scaling lands speech RMS in roughly the same band Vapi emitted.
        setVolumeLevel(Math.min(1, rms * 4));
      });

      retell.on("call_ended", () => {
        setVolumeLevel(0);
        if (phaseRef.current !== "fallback") {
          goToFallback("ended");
        }
      });

      retell.on("error", (err: unknown) => {
        console.error("[Retell] error", err);
        setErrorDetail(describeRetellError(err));
        goToFallback("error");
      });

      // Step 3: start the call.
      await retell.startCall({
        accessToken,
        sampleRate: 24000,
        emitRawAudioSamples: true,
      });
    } catch (err) {
      console.error("[Retell] start threw", err);
      setErrorDetail(describeRetellError(err));
      goToFallback("error");
    }
  }, [goToFallback]);

  const stopConversation = useCallback(() => {
    if (retellRef.current) {
      try {
        retellRef.current.stopCall();
      } catch (err) {
        console.error("[Retell] stopCall threw", err);
      }
    }
  }, []);

  const handleOrbClick = useCallback(() => {
    if (phase === "idle") {
      startConversation();
    } else if (phase === "active") {
      stopConversation();
    }
  }, [phase, startConversation, stopConversation]);

  const isActive = phase === "active";
  const isConnecting = isActive && voiceStatus === "connecting";
  const isSpeaking = isActive && voiceStatus === "speaking";

  const activeScale =
    !prefersReducedMotion && isSpeaking ? 1 + volumeLevel * 0.18 : 1;

  const statusText = (() => {
    if (phase === "idle") return "Tap the orb to talk to Carlos";
    if (phase === "active") {
      switch (voiceStatus) {
        case "connecting":
          return "Connecting…";
        case "listening":
          return "Listening…";
        case "speaking":
          return "Carlos is speaking";
        case "thinking":
          return "Thinking…";
      }
    }
    if (phase === "fallback") {
      return fallbackReason === "error"
        ? errorDetail || "Something went wrong — try again."
        : "Call ended";
    }
    return "";
  })();

  return (
    <section className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto flex flex-col items-center text-center">
        <Reveal>
          <p className="small-caps text-primary mb-16">A real conversation. Not a chatbot.</p>
        </Reveal>

        {/* Orb */}
        <Reveal delay={120} className="relative my-8 flex items-center justify-center">
          <button
            type="button"
            onClick={handleOrbClick}
            disabled={isConnecting}
            aria-label={
              isActive
                ? "End voice conversation with Carlos"
                : "Start voice conversation with Carlos"
            }
            className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px] flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed group"
          >
            <span
              className={`absolute inset-0 rounded-full orb-ring transition-opacity duration-500 ${
                isActive ? "opacity-90" : "opacity-100"
              }`}
              style={{ background: "var(--gradient-glow-amber)" }}
            />
            <span
              className="absolute inset-0 rounded-full orb-ring"
              style={{ background: "var(--gradient-glow-amber)", animationDelay: "1.2s" }}
            />
            <span
              className="absolute inset-0 rounded-full orb-ring"
              style={{ background: "var(--gradient-glow-amber)", animationDelay: "2.4s" }}
            />

            {isConnecting && (
              <span className="absolute inset-[-6px] rounded-full border-2 border-primary/70 animate-ping" />
            )}

            {isActive && voiceStatus !== "connecting" && (
              <span className="absolute inset-[-2px] rounded-full ring-4 ring-primary/60 shadow-[0_0_80px_rgba(200,80,46,0.55)]" />
            )}

            <span
              className={`relative w-[60%] h-[60%] rounded-full ${
                isActive ? "" : "orb-pulse"
              } flex items-center justify-center shadow-[0_0_80px_-10px_hsl(var(--primary)/0.6)]`}
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, hsl(35 90% 70%), hsl(18 70% 45%) 70%, hsl(18 50% 25%))",
                transform: `scale(${activeScale})`,
                transition: "transform 80ms ease-out",
              }}
            >
              {isActive ? (
                <PhoneOff
                  className="text-cream/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  size={28}
                />
              ) : (
                <Mic className="text-cream/90" size={28} />
              )}
            </span>
          </button>
        </Reveal>

        <Reveal delay={240}>
          <h2 className="mt-10 font-display text-4xl md:text-5xl tracking-tight text-foreground max-w-3xl">
            <strong className="font-medium">"Talk to Carlos."</strong>
            <br />
            <span className="italic font-light text-foreground/80">
              Our senior roofing expert. Live. 24/7.
            </span>
          </h2>
        </Reveal>

        <p
          className={`mt-6 small-caps text-sm tabular min-h-[1.5rem] tracking-wider transition-colors ${
            phase === "fallback" && fallbackReason === "error"
              ? "text-destructive"
              : "text-foreground/60"
          }`}
          aria-live="polite"
        >
          {statusText}
        </p>

        {isActive && (
          <button
            type="button"
            onClick={stopConversation}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 text-xs small-caps border border-border/50 text-foreground/75 hover:text-foreground hover:border-foreground/50 rounded-full transition-colors"
          >
            <PhoneOff size={14} />
            End call
          </button>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 small-caps text-foreground/70">
          <Reveal delay={360} className="inline-flex"><span>English &amp; Spanish</span></Reveal>
          <Reveal delay={440} className="inline-flex"><span className="text-primary">→</span></Reveal>
          <Reveal delay={520} className="inline-flex"><span>Answers in &lt;30s</span></Reveal>
          <Reveal delay={600} className="inline-flex"><span className="text-primary">→</span></Reveal>
          <Reveal delay={680} className="inline-flex"><span>Books consultation</span></Reveal>
          <Reveal delay={760} className="inline-flex"><span className="text-primary">→</span></Reveal>
          <Reveal delay={840} className="inline-flex"><span>Works weekends, holidays, hurricanes</span></Reveal>
        </div>
      </div>
    </section>
  );
};
