import { Reveal } from "@/components/site/Reveal";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    setup: "$3,500",
    monthly: "$2,500",
    feats: [
      "Voice agent inbound bilingüe",
      "Form callback automation",
      "Dashboard semanal",
      "Salesforce read integration",
      "Trained on Istueta scope",
      "Email + SMS alerts",
      "Pilot mes 1 (no penalty)",
    ],
  },
  {
    name: "Growth",
    setup: "$5,000",
    monthly: "$3,000",
    recommended: true,
    feats: [
      "Todo lo de Foundation",
      "Voice + chat widget on website",
      "Multi-channel: WhatsApp + IG DMs",
      "Salesforce bidirectional sync",
      "Auto-quote generation",
      "Post-visit email automation",
      "Reactivation: 5,000+ dormant",
      "Quarterly tuning cycle",
    ],
  },
  {
    name: "Complete",
    setup: "$7,500",
    monthly: "$3,500",
    feats: [
      "Todo lo de Growth",
      "Hurricane spike auto-handling",
      "Inventory live sync",
      "Document management",
      "Permit/insurance workflows",
      "Custom Salesforce reporting",
      "Branded voice persona",
      "Dedicated success engineer",
      "Monthly strategy review",
      "Priority response SLA",
    ],
  },
];

export const InversionSection = () => {
  return (
    <section id="inversion" className="py-32 md:py-40 px-6 md:px-10 scroll-mt-32 bg-warm">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">La Inversión</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Tres formas de empezar. Un solo objetivo:
            <br />
            <em className="italic font-light text-foreground/85">ROI positivo desde el mes 1.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article
                className={`relative h-full p-8 md:p-10 ${
                  t.recommended
                    ? "bg-background border-2 border-primary md:scale-[1.03] md:-translate-y-2 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.4)]"
                    : "bg-background/60 border border-border"
                }`}
              >
                {t.recommended && (
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground small-caps px-3 py-1 text-[0.6rem]">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-tight">{t.name}</h3>
                <div className="mt-6 space-y-1">
                  <p className="font-display tabular text-4xl text-foreground">
                    {t.setup}
                    <span className="small-caps text-foreground/50 text-[0.6rem] ml-2">setup</span>
                  </p>
                  <p className="font-display tabular text-2xl text-foreground/80">
                    {t.monthly}
                    <span className="small-caps text-foreground/50 text-[0.6rem] ml-2">/ mo</span>
                  </p>
                </div>
                <div className="editorial-rule my-8 opacity-50" />
                <ul className="space-y-3.5 text-foreground/85 text-sm">
                  {t.feats.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ROI block */}
        <Reveal delay={120}>
          <div className="mt-20 bg-deep border border-border p-8 md:p-10 font-mono text-sm md:text-[15px] text-foreground/85 leading-relaxed">
            <p className="small-caps text-primary text-[0.65rem] mb-5">// ROI Calculation · Growth tier</p>
            <p>Current exposure:{" "}
              <span className="text-destructive font-bold">~$41,000/mo</span> in cost + lost revenue
            </p>
            <p className="mt-3">With Kivo Growth ($3,000/mo):</p>
            <p>  Revenue recovered:{" "}
              <span className="text-primary font-bold">~$36,450/mo</span> (conservador)
            </p>
            <p>  Net monthly impact:{" "}
              <span className="text-success font-bold">+$36K</span> to P&L
            </p>
            <p className="mt-3">Break-even:{" "}
              <span className="text-success font-bold">Mes 1</span>
            </p>
            <p>Annualized conservador:{" "}
              <span className="text-primary font-bold">+$430K/año</span>
            </p>
            <p>Annualized realista:{" "}
              <span className="text-primary font-bold">+$800K – $1.2M/año</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal className="md:col-span-2">
            <div className="bg-cream text-on-cream p-8 border-l-4 border-primary h-full">
              <p className="small-caps text-primary mb-3">🎯 Primer Mes Pilot</p>
              <p className="font-display text-xl leading-snug">
                Primeros 30 días son período piloto. Si no vemos impacto medible, ajustamos scope o
                pueden salir sin penalty.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-background border border-border p-6 h-full">
              <p className="small-caps text-foreground/55 mb-3">📌 Sidebar</p>
              <p className="font-display text-base leading-snug">
                ¿Modernizar el website completo?
              </p>
              <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                Si Istueta decide rehacer istuetaroofing.com completo, Kivo Studio (branding + web +
                SEO + ads + content) puede liderar ese proyecto. El Tab 1 que ven es nuestro work
                quality.
              </p>
              <p className="mt-4 small-caps text-primary text-[0.65rem]">kivo.ai/studio ↗</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
