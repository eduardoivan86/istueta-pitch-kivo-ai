import { Reveal } from "@/components/site/Reveal";

const stats1 = [
  { n: "$6.7B", label: "Florida roofing contractors market 2026", src: "IBISWorld, 2026" },
  { n: "2.75M", label: "Miami-Dade County population 2026", src: "US Census, ACS 2024" },
  { n: "69.3%", label: "Miami-Dade Hispanic population share", src: "US Census, 2024" },
  { n: "~80%", label: "Re-roofing share of Florida's annual demand", src: "Mordor Intelligence, 2026" },
];

const stats2 = [
  { n: "$30B+", label: "Roof-related insurance claims, 2024" },
  { n: "27", label: "Hurricanes per decade, Florida average" },
  { n: "30%", label: "Of South Florida roofers' annual revenue happens in hurricane season" },
  { n: "50–100%", label: "Premium pricing during emergency repairs" },
];

export const PanoramaSection = () => {
  return (
    <section id="panorama" className="bg-background py-32 md:py-40 px-6 md:px-10 scroll-mt-32">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">Market Panorama</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[64px] tracking-tight leading-[1.05] max-w-4xl">
            The market exists. The size surprises.
            <br />
            <em className="italic font-light text-foreground/85">
              And it's changing faster than the industry admits.
            </em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats1.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} variant="scale">
              <div className="border-t border-border pt-6">
                <div className="font-display text-primary tabular text-5xl md:text-[72px] tracking-[-0.03em] leading-none">
                  {s.n}
                </div>
                <p className="mt-5 text-foreground/85 text-sm leading-snug">{s.label}</p>
                <p className="mt-3 small-caps italic text-foreground/40 text-[0.6rem] tracking-wider">
                  {s.src}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-20 max-w-3xl text-foreground/70 leading-relaxed text-base md:text-lg">
            South Florida isn't just another market — it's <em>the</em> market. Property density,
            purchasing power, and a hurricane season that turns every June into a revenue event.
            The question isn't whether demand exists. It's who is ready to answer it at 11pm on a
            Saturday.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats2.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} variant="scale">
              <div className="border-t border-border pt-6">
                <div className="font-display text-foreground tabular text-4xl md:text-5xl tracking-[-0.03em] leading-none">
                  {s.n}
                </div>
                <p className="mt-4 text-foreground/65 text-sm leading-snug">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-24 text-center font-display italic text-2xl md:text-3xl text-foreground/85 max-w-3xl mx-auto leading-snug">
            "The prize is on the table. The only question is who captures it."
          </p>
        </Reveal>
      </div>
    </section>
  );
};
