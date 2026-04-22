import { Reveal } from "@/components/site/Reveal";

const items = [
  {
    n: "41",
    suffix: " years",
    label: "Of craftsmanship",
    desc: "Of work that outlasts hurricanes, humidity, and Miami summers.",
  },
  {
    n: "78",
    suffix: "%",
    label: "Of projects from referrals",
    desc: "We don't advertise. Our roofs do.",
  },
  {
    n: "20+",
    suffix: "",
    label: "Factory-certified experts",
    desc: "Every install passes through trained hands.",
  },
  {
    n: "4.8",
    suffix: "★",
    label: "Average customer rating",
    desc: "Across Facebook, Guild Quality, and Houzz.",
  },
];

export const DifferenceSection = () => {
  return (
    <section className="bg-deep py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">The Istueta difference</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl mb-24">
            Numbers earned over <em className="italic font-light">four decades.</em>
          </h2>
        </Reveal>

        <div className="space-y-20 md:space-y-24">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end border-t border-border/50 pt-10 md:pt-14">
                <div className="md:col-span-7">
                  <div className="font-display tabular text-primary leading-[0.85] tracking-[-0.04em] text-[88px] sm:text-[140px] md:text-[200px] break-words">
                    {it.n}
                    <span className="text-primary/80 text-[0.5em] align-top ml-2">{it.suffix}</span>
                  </div>
                </div>
                <div className="md:col-span-5 md:pb-8">
                  <p className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
                    {it.label}
                  </p>
                  <p className="mt-3 text-foreground/60 leading-relaxed max-w-sm">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
