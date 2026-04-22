import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import t1 from "@/assets/portfolio-tile-1.jpg";
import t2 from "@/assets/portfolio-tile-2.jpg";
import t3 from "@/assets/portfolio-villa.jpg";
import t4 from "@/assets/portfolio-bay.jpg";
import t5 from "@/assets/portfolio-twilight.jpg";
import t6 from "@/assets/portfolio-aerial.jpg";
import m1 from "@/assets/portfolio-metal-1.jpg";
import m2 from "@/assets/portfolio-metal-2.jpg";
import f1 from "@/assets/portfolio-flat.jpg";
import c1 from "@/assets/portfolio-construction.jpg";
import i1 from "@/assets/portfolio-install.jpg";
import h1 from "@/assets/hero-oceanfront.jpg";

type Cat = "All" | "Tile" | "Metal" | "Flat";

const items = [
  { src: t1, cat: "Tile", caption: "Coral Gables · Barrel tile detail", h: "tall" },
  { src: m1, cat: "Metal", caption: "Bay Point · Standing seam waterfront", h: "med" },
  { src: t2, cat: "Tile", caption: "Pinecrest · Mediterranean estate", h: "med" },
  { src: t4, cat: "Tile", caption: "Coconut Grove · Waterfront restoration", h: "tall" },
  { src: f1, cat: "Flat", caption: "Miami Beach · Modern flat profile", h: "med" },
  { src: t6, cat: "Tile", caption: "Pinecrest · Aerial documentation", h: "short" },
  { src: m2, cat: "Metal", caption: "Coral Gables · Dark standing seam", h: "med" },
  { src: t3, cat: "Tile", caption: "Miami Shores · Mediterranean villa", h: "tall" },
  { src: i1, cat: "Tile", caption: "Bay Point · Install in progress", h: "tall" },
  { src: t5, cat: "Tile", caption: "Coral Gables · Twilight delivery", h: "tall" },
  { src: c1, cat: "Tile", caption: "Pinecrest · New construction", h: "med" },
  { src: h1, cat: "Tile", caption: "Bay Point · Oceanfront completion", h: "med" },
] as const;

const heightClass = {
  short: "row-span-1",
  med: "row-span-2",
  tall: "row-span-3",
};

export const PortfolioSection = () => {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="portfolio" className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <p className="small-caps text-foreground/60 mb-4">Selected work</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-2xl">
                Roofs we're <em className="italic font-light">proud of.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="flex gap-1">
            {(["All", "Tile", "Metal", "Flat"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`small-caps px-4 py-2 transition-colors ${
                  filter === c
                    ? "text-primary border-b border-primary"
                    : "text-foreground/60 hover:text-foreground border-b border-transparent"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[120px] md:auto-rows-[140px] gap-2">
          {filtered.map((it, idx) => (
            <figure
              key={idx}
              className={`relative overflow-hidden bg-warm group ${heightClass[it.h]}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity small-caps text-cream/90 text-[0.65rem]">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
