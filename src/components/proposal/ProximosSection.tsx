import { Reveal } from "@/components/site/Reveal";

const steps = [
  ["01 · Sign", "Contrato firmado → kick-off call al día siguiente"],
  ["02 · Discovery (Semana 1)", "Team aprende Istueta — calls, scripts, productos"],
  ["03 · Live (Día 7)", "Primera llamada real cerrada por Maria"],
];

export const ProximosSection = () => {
  return (
    <section className="bg-deep py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.02] tracking-[-0.025em] max-w-4xl">
            Your next customer is trying to reach you{" "}
            <em className="italic font-light text-primary">right now.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(([n, d], i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="border-t border-primary/40 pt-6">
                <p className="small-caps text-primary mb-4">{n}</p>
                <p className="font-display text-xl text-foreground leading-snug">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-16 p-8 border border-primary bg-primary/5">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
              <strong className="font-medium">Hurricane season arranca Junio 1.</strong>{" "}
              <em className="italic font-light text-foreground/80">
                Tenemos 6 semanas para estar listos.
              </em>
            </p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <a
            href="mailto:eduardo@usekivo.ai"
            className="mt-14 inline-flex items-center justify-center w-full md:w-auto px-12 h-16 bg-primary text-primary-foreground small-caps text-sm hover:bg-primary/90 transition-colors"
          >
            Hablar con Eduardo · eduardo@usekivo.ai
          </a>
        </Reveal>
      </div>
    </section>
  );
};
