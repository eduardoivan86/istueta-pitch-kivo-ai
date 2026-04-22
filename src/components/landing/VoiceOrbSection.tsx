import { Mic } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const VoiceOrbSection = () => {
  return (
    <section className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-editorial mx-auto flex flex-col items-center text-center">
        <Reveal>
          <p className="small-caps text-primary mb-16">A real conversation. Not a chatbot.</p>
        </Reveal>

        {/* Orb */}
        <Reveal delay={120} className="relative my-8 flex items-center justify-center">
          <div className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px] flex items-center justify-center">
            {/* outer glow rings */}
            <span
              className="absolute inset-0 rounded-full orb-ring"
              style={{ background: "var(--gradient-glow-amber)" }}
            />
            <span
              className="absolute inset-0 rounded-full orb-ring"
              style={{ background: "var(--gradient-glow-amber)", animationDelay: "1.2s" }}
            />
            <span
              className="absolute inset-0 rounded-full orb-ring"
              style={{ background: "var(--gradient-glow-amber)", animationDelay: "2.4s" }}
            />
            {/* core orb */}
            <span
              className="relative w-[60%] h-[60%] rounded-full orb-pulse flex items-center justify-center shadow-[0_0_80px_-10px_hsl(var(--primary)/0.6)]"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, hsl(35 90% 70%), hsl(18 70% 45%) 70%, hsl(18 50% 25%))",
              }}
            >
              <Mic className="text-cream/90" size={28} />
            </span>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <h2 className="mt-10 font-display text-4xl md:text-5xl tracking-tight text-foreground max-w-3xl">
            <strong className="font-medium">"Talk to Carlos."</strong>
            <br />
            <span className="italic font-light text-foreground/80">
              Our senior roofing expert. Live. 24/7.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 small-caps text-foreground/70">
            <span>English & Spanish</span>
            <span className="text-primary">→</span>
            <span>Answers in &lt;30s</span>
            <span className="text-primary">→</span>
            <span>Books consultation</span>
            <span className="text-primary">→</span>
            <span>Works weekends, holidays, hurricanes</span>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <p className="mt-10 font-display italic text-foreground/50 text-sm">
            Live voice demo during the meeting — call the number Eduardo shares.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
