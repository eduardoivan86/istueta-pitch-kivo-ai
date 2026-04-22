import heroImg from "@/assets/hero-oceanfront.jpg";

export const HeroSection = () => {
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
        <h1 className="font-display text-cream text-[56px] leading-[1.02] sm:text-7xl md:text-[88px] lg:text-[96px] tracking-[-0.02em] max-w-5xl">
          Your last roof.
          <br />
          <em className="italic font-light text-cream/95">Built to outlive the house.</em>
        </h1>

        <p className="mt-8 max-w-xl text-cream/70 text-base md:text-lg leading-relaxed">
          41 years installing roofs that define South Florida homes.
          <br />
          Family-owned. Factory-certified. Miami-proud.
        </p>

        {/* Stats bar */}
        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 small-caps text-cream/85">
          <span>41 Years</span>
          <span className="text-cream/30">·</span>
          <span>20+ Experts</span>
          <span className="text-cream/30">·</span>
          <span>78% Referral Rate</span>
          <span className="text-cream/30">·</span>
          <span>4.8★ Avg</span>
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
