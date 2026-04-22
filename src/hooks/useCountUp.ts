import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  decimals?: number;
  threshold?: number;
}

export function useCountUp({
  target,
  duration = 1500,
  decimals = 0,
  threshold = 0.3,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let rafId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(target * eased);
            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
            }
          };

          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration, threshold]);

  const displayValue = value.toFixed(decimals);
  return { ref, value: displayValue };
}
