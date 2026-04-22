import { useCallback, useEffect, useRef, useState } from "react";
import type VapiType from "@vapi-ai/web";

export type VapiState = "idle" | "connecting" | "active" | "ended" | "error";

interface UseVapiOptions {
  assistantId: string;
  publicKey: string | undefined;
}

export function useVapi({ assistantId, publicKey }: UseVapiOptions) {
  const vapiRef = useRef<VapiType | null>(null);
  const loadingRef = useRef(false);
  const [state, setState] = useState<VapiState>("idle");
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
        vapiRef.current = null;
      }
    };
  }, []);

  const ensureVapi = useCallback(async (): Promise<VapiType | null> => {
    if (vapiRef.current) return vapiRef.current;
    if (!publicKey) {
      setErrorMessage("Voice demo not configured yet");
      return null;
    }
    if (loadingRef.current) return null;

    loadingRef.current = true;
    try {
      const { default: Vapi } = await import("@vapi-ai/web");
      const vapi = new Vapi(publicKey);

      vapi.on("call-start", () => {
        setState("active");
        setErrorMessage(null);
      });

      vapi.on("call-end", () => {
        setState("ended");
        setIsAssistantSpeaking(false);
        setVolumeLevel(0);
        setTimeout(() => setState("idle"), 1500);
      });

      vapi.on("speech-start", () => setIsAssistantSpeaking(true));
      vapi.on("speech-end", () => setIsAssistantSpeaking(false));
      vapi.on("volume-level", (level: number) => setVolumeLevel(level));

      vapi.on("error", (err: Error) => {
        console.error("[Vapi] error:", err);
        setErrorMessage(err?.message || "Voice connection error");
        setState("error");
        setTimeout(() => setState("idle"), 3000);
      });

      vapiRef.current = vapi;
      return vapi;
    } catch (err) {
      console.error("[Vapi] load error:", err);
      setErrorMessage("Could not load voice client");
      setState("error");
      setTimeout(() => setState("idle"), 3000);
      return null;
    } finally {
      loadingRef.current = false;
    }
  }, [publicKey]);

  const startCall = useCallback(async () => {
    if (state === "active" || state === "connecting") return;

    setState("connecting");
    setErrorMessage(null);

    const vapi = await ensureVapi();
    if (!vapi) return;

    try {
      await vapi.start(assistantId);
    } catch (err) {
      console.error("[Vapi] start error:", err);
      const message = err instanceof Error ? err.message : "Could not start call";
      setErrorMessage(message);
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  }, [assistantId, state, ensureVapi]);

  const stopCall = useCallback(() => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
  }, []);

  const toggleCall = useCallback(() => {
    if (state === "idle" || state === "ended" || state === "error") {
      startCall();
    } else if (state === "active") {
      stopCall();
    }
  }, [state, startCall, stopCall]);

  return {
    state,
    volumeLevel,
    isAssistantSpeaking,
    errorMessage,
    startCall,
    stopCall,
    toggleCall,
  };
}
