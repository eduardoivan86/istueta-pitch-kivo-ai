import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const cities = [
  "Miami",
  "Miami Shores",
  "Coral Gables",
  "Pinecrest",
  "Palmetto Bay",
  "Kendall",
  "Bay Point",
  "Broader Miami-Dade",
];

export const ServiceAreasSection = () => {
  return (
    <section className="py-32 md:py-40 px-6 md:px-10" style={{ backgroundColor: "hsl(220 8% 14%)" }}>
      <div className="max-w-editorial mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-6">
          <Reveal>
            <p className="small-caps text-foreground/60 mb-6">Service areas</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-12 max-w-md">
              Where we work. <em className="italic font-light">All across Dade.</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-display text-xl md:text-2xl text-foreground/85">
            {cities.map((c, i) => (
              <Reveal key={c} delay={i * 30}>
                <span>{c}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Decorative map */}
        <Reveal delay={200} className="md:col-span-6">
          <div className="relative aspect-square max-w-md ml-auto bg-deep border border-border/40 p-6">
            <svg viewBox="0 0 200 200" className="w-full h-full text-foreground/30">
              {/* Stylized Miami-Dade outline */}
              <path
                d="M40 30 L160 35 L170 80 L165 130 L150 170 L80 175 L50 150 L35 100 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
              <path
                d="M170 80 L195 95 L185 140 L165 130"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                strokeDasharray="2 2"
              />
              {/* Pins */}
              {[
                [95, 70],
                [110, 90],
                [120, 110],
                [85, 130],
                [130, 60],
                [70, 95],
                [140, 130],
                [100, 150],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="2.2" fill="hsl(var(--primary))" />
                  <circle cx={x} cy={y} r="6" fill="hsl(var(--primary)/0.18)" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-4 left-6 small-caps text-foreground/50 text-[0.65rem] flex items-center gap-2">
              <MapPin size={12} /> Miami-Dade County
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
