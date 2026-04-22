import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-oceanfront.jpg";

const stats = [
  { label: "41 Years", delay: 600 },
  { label: "20+ Experts", delay: 720 },
  { label: "78% Referral Rate", delay: 840 },
  { label: "4.8★ Avg", delay: 960 },
];

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;
    let rafId = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const parallaxOffset = prefersReducedMotion.current
    ? 0
    : Math.min(scrollY * 0.15, 80);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Oceanfront Miami home with terracotta tile roof at golden hour"
          className="w-full h-full object-cover ken-burns"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </div>

      {/* Top-left micro-text */}
      <div className="absolute top-[96px] left-6 md:left-10 z-10 small-caps text-cream/90">
        Istueta Roofing · Since 1985
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-editorial mx-auto px-6 md:px-10 min-h-screen flex flex-col justify-center pt-24">
        <h1 className="font-display text-cream text-[44px] leading-[1.03] sm:text-6xl md:text-[88px] lg:text-[96px] tracking-[-0.02em] max-w-5xl">
          Your last roof.
          <br />
          <em className="italic font-light text-cream/95">Built to outlive the house.</em>
        </h1>

        <p className="mt-8 max-w-xl text-cream/70 text-base md:text-lg leading-relaxed">
          41 years installing roofs that define South Florida homes.
          <br />
          Family-owned. Factory-certified. Bilingual. Miami-proud.
        </p>

        {/* Stats bar */}
        <div
          className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 small-caps text-cream/85"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: "transform",
          }}
        >
          {stats.map((s, i) => (
            <span key={s.label} className="flex items-center gap-x-5 gap-y-3">
              {i > 0 && <span className="text-cream/30">·</span>}
              <span
                className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${s.delay}ms`,
                }}
              >
                {s.label}
              </span>
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 h-14 bg-primary text-primary-foreground small-caps hover:bg-primary/90 transition-colors"
          >
            Talk to our roof expert
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 h-14 border border-primary/60 text-cream small-caps hover:border-primary hover:bg-primary/10 transition-colors"
          >
            Schedule consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="block w-px h-12 bg-cream/40" />
        <span className="small-caps text-cream/50 text-[0.6rem]">Scroll</span>
      </div>
    </section>
  );
};
