import { Reveal } from "@/components/site/Reveal";

const steps = [
  ["01", "Consultation"],
  ["02", "Showroom"],
  ["03", "Custom Solution"],
  ["04", "Install"],
  ["05", "Enjoy"],
  ["06", "Maintain"],
];

export const ProcessSection = () => {
  return (
    <section className="py-32 md:py-40 px-6 md:px-10" style={{ backgroundColor: "hsl(220 8% 14%)" }}>
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-foreground/60 mb-6">Process</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-2xl mb-20">
            Six steps. <em className="italic font-light">Zero surprises.</em>
          </h2>
        </Reveal>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-[22px] h-px bg-border/60" />
          <div className="relative grid grid-cols-6 gap-4">
            {steps.map(([n, label], i) => (
              <Reveal key={n} delay={i * 60} className="flex flex-col items-center text-center">
                <span className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center small-caps text-primary text-[0.7rem] tabular relative z-10">
                  {n}
                </span>
                <span className="mt-5 font-display text-base text-foreground tracking-wide">
                  {label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[14px] top-3 bottom-3 w-px bg-border/60" />
          {steps.map(([n, label], i) => (
            <div key={n} className="relative pb-8 last:pb-0">
              <span className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center small-caps text-primary text-[0.6rem]">
                {n}
              </span>
              <span className="font-display text-lg text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
