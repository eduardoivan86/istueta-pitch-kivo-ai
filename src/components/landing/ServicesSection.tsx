import { Reveal } from "@/components/site/Reveal";
import tile from "@/assets/portfolio-tile-1.jpg";
import metal from "@/assets/portfolio-metal-2.jpg";
import install from "@/assets/portfolio-install.jpg";
import construction from "@/assets/portfolio-construction.jpg";

const services = [
  {
    n: "01",
    title: "Installation",
    desc: "Tile, metal, flat — roofs designed to handle South Florida's worst.",
    img: tile,
  },
  {
    n: "02",
    title: "Repair",
    desc: "Storm damage, leaks, emergency response.",
    img: metal,
  },
  {
    n: "03",
    title: "Maintenance",
    desc: "Regular care extends roof lifespan.",
    img: install,
  },
  {
    n: "04",
    title: "New Construction",
    desc: "From blueprint to completion.",
    img: construction,
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-foreground/60 mb-6">Services</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
            Four crafts. <em className="italic font-light">One standard.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="group relative overflow-hidden bg-warm aspect-[4/5] md:aspect-[5/6]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:opacity-90"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(222 14% 6% / 0.1) 0%, hsl(222 14% 6% / 0.85) 100%)",
                  }}
                />
                <div className="absolute top-6 left-6 small-caps text-cream/70">
                  {s.n} /
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <h3 className="font-display text-3xl md:text-[32px] text-cream tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-cream/70 text-sm md:text-base max-w-md leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
