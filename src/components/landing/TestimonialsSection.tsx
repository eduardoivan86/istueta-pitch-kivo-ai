import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";

const quotes = [
  {
    q: "Everybody has commented on this roof, this looks fabulous.",
    who: "The Aguirre Family · Miami Shores",
  },
  {
    q: "On a rating of 1 to 10, I give my experience a 10.",
    who: "The Reed Family · Palmetto Bay",
  },
  {
    q: "I would refer Istueta Roofing to my friends and family.",
    who: "The de la Viesca Family · Pinecrest",
  },
  {
    q: "It's the perfect experience. They went above and beyond the call of duty.",
    who: "The Pawley Family · Coral Gables",
  },
];

export const TestimonialsSection = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-background py-32 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-foreground/60 mb-12 text-center">Voices from the homes</p>
        </Reveal>

        <div className="relative min-h-[280px] md:min-h-[320px]">
          {quotes.map((qt, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-editorial ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-4xl mx-auto px-2">
                <span className="font-display text-primary text-[96px] md:text-[120px] leading-none block -mb-8">
                  "
                </span>
                <blockquote className="font-display italic text-2xl sm:text-3xl md:text-[32px] leading-snug text-foreground tracking-tight">
                  {qt.q}
                </blockquote>
                <p className="mt-10 small-caps text-foreground/60">— {qt.who}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/25"
              }`}
              aria-label={`Quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
