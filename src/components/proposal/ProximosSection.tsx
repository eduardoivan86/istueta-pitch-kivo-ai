import { Reveal } from "@/components/site/Reveal";

const steps = [
  ["01 · Sign", "Contract signed → kick-off call the next day"],
  ["02 · Discovery (Week 1)", "Team learns Istueta — calls, scripts, products"],
  ["03 · Live (Day 7)", "First real call closed by Carlos"],
];

export const ProximosSection = () => {
  return (
    <section className="bg-deep py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[1.02] tracking-[-0.025em] max-w-4xl">
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
              <strong className="font-medium">Hurricane season starts June 1.</strong>{" "}
              <em className="italic font-light text-foreground/80">
                We have 6 weeks to be ready.
              </em>
            </p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <a
            href="mailto:eduardo@usekivo.ai"
            className="mt-14 inline-flex items-center justify-center w-full md:w-auto px-12 h-16 bg-primary text-primary-foreground small-caps text-sm hover:bg-primary/90 transition-colors"
          >
            Talk to Eduardo · eduardo@usekivo.ai
          </a>
        </Reveal>
      </div>
    </section>
  );
};
