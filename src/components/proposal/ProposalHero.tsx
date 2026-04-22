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
            K · Istueta Roofing · Propuesta de Crecimiento Estratégico · Abril 2026
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
              24/7. Bilingüe. For 41 years of craft.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 max-w-2xl text-foreground/70 text-base md:text-lg leading-relaxed">
            Istueta Roofing construye <strong className="text-foreground">78%</strong> de sus
            proyectos por referidos — un número que marca liderazgo absoluto en South Florida. Pero
            el 22% restante, los leads que llegan vía web, Instagram, WhatsApp, o después de hora,
            están escapando a competidores que responden en 30 segundos. Este documento explica
            exactamente por qué, cuánto está costando, y cómo Kivo AI puede cerrar esa brecha antes
            del próximo ciclo de huracanes.
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

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Badge>🇺🇸🇪🇸 Bilingüe nativo</Badge>
            <Badge>⭐ 4.8/5</Badge>
            <Badge>🏆 41 años</Badge>
            <Badge>🔨 CertainTeed + GAF + Ludowici</Badge>
            <Badge>🌀 Hurricane-ready</Badge>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <a
            href="#panorama"
            className="mt-20 inline-flex items-center gap-2 small-caps text-foreground/70 hover:text-primary transition-colors"
          >
            Ver el estudio completo ↓
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
