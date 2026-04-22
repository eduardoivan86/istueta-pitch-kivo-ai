import { Reveal } from "@/components/site/Reveal";

const small = [
  { name: "JP Medical Center", line: "After-hours patient intake captured 24/7.", stat: "+38% bookings" },
  { name: "Dental Care Deerfield Beach", line: "WhatsApp + voice unificado en bilingüe.", stat: "92% answer rate" },
  { name: "Lumber Plus", line: "Quote requests procesados en minutos, no días.", stat: "4× quote velocity" },
];

export const CasosSection = () => {
  return (
    <section className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">Casos Reales</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Operators already running Kivo across South Florida.
          </h2>
        </Reveal>

        {/* Featured: Harvey */}
        <Reveal delay={140}>
          <article className="mt-16 border border-border bg-card p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="small-caps text-primary text-[0.65rem]">Harvey by Renewal by Andersen</span>
              <span className="text-foreground/30">·</span>
              <span className="small-caps text-foreground/60 text-[0.65rem]">Windows & Doors</span>
            </div>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-foreground max-w-3xl tracking-tight">
              "After-hours y weekend leads muriendo antes de response."
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
              <Stat n="127" label="leads recovered" />
              <Stat n="14" label="deals closed" />
              <Stat n="$47K" label="new pipeline" />
            </div>

            <blockquote className="mt-12 border-l-2 border-primary pl-5 max-w-2xl text-foreground/75 italic">
              "We stopped losing weekend leads. Kivo just ships, week after week."
              <footer className="not-italic mt-3 small-caps text-foreground/50 text-[0.65rem]">
                — Harvey Lee, Design Consultant
              </footer>
            </blockquote>
          </article>
        </Reveal>

        {/* Small cases */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {small.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="border border-border p-6 h-full bg-background">
                <p className="small-caps text-foreground/55 text-[0.65rem] mb-4">{c.name}</p>
                <p className="font-display text-lg leading-snug text-foreground">{c.line}</p>
                <p className="mt-6 small-caps text-primary text-[0.7rem]">{c.stat}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Scaled projection */}
        <h3 className="mt-28 font-display text-3xl md:text-4xl tracking-tight max-w-3xl">
          Proyección escalada para Istueta.
        </h3>
        <div className="mt-10 space-y-4">
          {[
            { tag: "Conservador", time: "Fase 1 solo · primeros 30 días", out: "60–90 after-hours leads · $140K–$220K pipeline" },
            { tag: "Realista", time: "Fases 1–2 · 60 días", out: "150–200 leads · $450K–$630K pipeline" },
            { tag: "Fase completa", time: "Mes 3–6 anualizado", out: "$1.5M – $2.4M pipeline recovery" },
          ].map((p, i) => (
            <Reveal key={p.tag} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-border pt-5 items-baseline">
                <p className="md:col-span-3 small-caps text-primary">{p.tag}</p>
                <p className="md:col-span-4 small-caps text-foreground/55 text-[0.65rem]">{p.time}</p>
                <p className="md:col-span-5 font-display text-xl md:text-2xl tracking-tight text-foreground">
                  {p.out}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stat = ({ n, label }: { n: string; label: string }) => (
  <div className="border-t border-border pt-4">
    <div className="font-display tabular text-primary text-4xl md:text-6xl tracking-[-0.03em] leading-none">
      {n}
    </div>
    <p className="mt-3 small-caps text-foreground/55 text-[0.6rem]">{label}</p>
  </div>
);
