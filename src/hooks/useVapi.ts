import { useCallback, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

export type VapiState = "idle" | "connecting" | "active" | "ended" | "error";

interface UseVapiOptions {
  assistantId: string;
  publicKey: string | undefined;
}

export function useVapi({ assistantId, publicKey }: UseVapiOptions) {
  const vapiRef = useRef<Vapi | null>(null);
  const [state, setState] = useState<VapiState>("idle");
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);

  useEffect(() => {
    if (!publicKey) {
      setErrorMessage("Vapi public key not configured");
      return;
    }

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

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

    vapi.on("speech-start", () => {
      setIsAssistantSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setIsAssistantSpeaking(false);
    });

    vapi.on("volume-level", (level: number) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (err: Error) => {
      console.error("[Vapi] error:", err);
      setErrorMessage(err?.message || "Voice connection error");
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, [publicKey]);

  const startCall = useCallback(async () => {
    if (!vapiRef.current) {
      setErrorMessage("Vapi not initialized");
      return;
    }
    if (state === "active" || state === "connecting") return;

    setState("connecting");
    setErrorMessage(null);

    try {
      await vapiRef.current.start(assistantId);
    } catch (err) {
      console.error("[Vapi] start error:", err);
      const message = err instanceof Error ? err.message : "Could not start call";
      setErrorMessage(message);
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  }, [assistantId, state]);

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
