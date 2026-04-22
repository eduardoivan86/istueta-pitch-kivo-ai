import { Reveal } from "@/components/site/Reveal";

export const ProposalHero = () => {
  return (
    <section className="bg-background pt-32 md:pt-40 pb-32 px-6 md:px-10 relative overflow-hidden">
      {/* subtle ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] opacity-50"
        style={{ background: "var(--gradient-glow-amber)" }}
      />
      <div className="max-w-editorial mx-auto relative">
        <Reveal>
          <p className="small-caps text-foreground/55 mb-6 tracking-[0.22em]">
            K · Istueta Roofing · Strategic Growth Proposal · April 2026
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap gap-3 mb-12">
            <Badge>🏠 Miami, FL</Badge>
            <Badge>📅 Q2 2026 Launch</Badge>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="font-display text-[44px] sm:text-6xl md:text-[88px] leading-[1.02] tracking-[-0.025em] max-w-5xl">
            Sells like your best closer.
            <br />
            <em className="italic font-light text-foreground/85">
              24/7. Bilingual. For 41 years of craft.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 max-w-2xl text-foreground/70 text-base md:text-lg leading-relaxed">
            Istueta Roofing builds <strong className="text-foreground">78%</strong> of its projects
            from referrals — a number that marks absolute leadership in South Florida. But the
            remaining 22%, the leads that arrive via web, Instagram, WhatsApp, or after hours, are
            leaking to competitors who respond in 30 seconds. This document explains exactly why,
            how much it's costing, and how Kivo AI can close that gap before the next hurricane
            cycle.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 small-caps text-foreground/80">
            <span>Every appointment booked.</span>
            <span className="text-primary">·</span>
            <span>Every quote sent.</span>
            <span className="text-primary">·</span>
            <span>Every dormant lead reactivated.</span>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          <Reveal delay={400} className="inline-flex"><Badge>🇺🇸🇪🇸 Native bilingual</Badge></Reveal>
          <Reveal delay={480} className="inline-flex"><Badge>⭐ 4.8/5</Badge></Reveal>
          <Reveal delay={560} className="inline-flex"><Badge>🏆 41 years</Badge></Reveal>
          <Reveal delay={640} className="inline-flex"><Badge>🔨 CertainTeed + GAF + Ludowici</Badge></Reveal>
          <Reveal delay={720} className="inline-flex"><Badge>🌀 Hurricane-ready</Badge></Reveal>
        </div>

        <Reveal delay={500}>
          <a
            href="#panorama"
            className="mt-20 inline-flex items-center gap-2 small-caps text-foreground/70 hover:text-primary transition-colors"
          >
            See the full study ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3.5 py-1.5 border border-border/70 bg-background/60 small-caps text-foreground/80 text-[0.65rem]">
    {children}
  </span>
);
