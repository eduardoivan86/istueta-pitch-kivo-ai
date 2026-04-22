import { Reveal } from "@/components/site/Reveal";

const stats1 = [
  { n: "$6.7B", label: "mercado de roofing contractors en Florida 2026", src: "IBISWorld, 2026" },
  { n: "2.75M", label: "habitantes Miami-Dade County 2026", src: "US Census, ACS 2024" },
  { n: "69.3%", label: "hispano Miami-Dade racial/ethnic makeup", src: "US Census, 2024" },
  { n: "~80%", label: "re-roofing share of annual demand in Florida", src: "Mordor Intelligence, 2026" },
];

const stats2 = [
  { n: "$30B+", label: "roof-related insurance claims 2024" },
  { n: "27", label: "huracanes promedio por década en Florida" },
  { n: "30%", label: "del revenue anual de South Florida roofers en hurricane season" },
  { n: "50–100%", label: "premium pricing durante emergency repairs" },
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
            El mercado existe. El tamaño sorprende.
            <br />
            <em className="italic font-light text-foreground/85">
              Y está cambiando más rápido de lo que la industria admite.
            </em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats1.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
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
            South Florida no es un mercado más — es <em>el</em> mercado. Densidad de propiedad,
            poder adquisitivo, y una temporada de huracanes que convierte cada Junio en un evento de
            revenue. La pregunta no es si hay demanda. Es quién está preparado para responderla a
            las 11pm de un sábado.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats2.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
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
            "El premio está en la mesa. La pregunta es quién lo captura."
          </p>
        </Reveal>
      </div>
    </section>
  );
};
