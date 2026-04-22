import { Reveal } from "@/components/site/Reveal";

const phases = [
  {
    n: "Fase 1",
    title: "Foundation",
    when: "Semanas 1–2",
    bullets: [
      "Voice agent inbound — bilingüe desde día 1",
      "Form callback automation",
      "Dashboard de operación semanal",
      "Salesforce integration (read + write)",
      "Trained on Istueta tone, products, geography",
      "Hurricane templates pre-cargados",
    ],
    capacity: "Capacidad típica: 100–250 calls/día sin hold time",
  },
  {
    n: "Fase 2",
    title: "Expansion Digital",
    when: "Semanas 3–4",
    bullets: [
      "Voice widget on istuetaroofing.com",
      "Chat widget con same-brain",
      "SMS follow-up automation",
      "Qualification scoring por tipo de proyecto",
      "Smart routing a Eduardo / sales team",
    ],
    capacity: "Capacidad típica: cobertura web 100% sin staff adicional",
  },
  {
    n: "Fase 3",
    title: "Multi-Channel Conquest",
    when: "Mes 2",
    bullets: [
      "WhatsApp Business API integration",
      "Instagram DMs auto-response + qualification",
      "Facebook Messenger unified inbox",
      "Salesforce sync bidireccional en tiempo real",
      "Cross-channel context (no repetir info)",
      "Voice ↔ chat ↔ WA handoff sin fricción",
    ],
    capacity: "Capacidad típica: 4 canales, una sola conversación por cliente",
  },
  {
    n: "Fase 4",
    title: "Revenue Recovery + Operational AI",
    when: "Mes 3+",
    bullets: [
      "Reactivation campaign sobre 5,000+ contactos dormidos",
      "Auto-quote generation por tipo de proyecto",
      "Post-visit email automation con next steps",
      "Document management (insurance, permits, contracts)",
      "Hurricane season templates + auto-spike handling",
      "Proactive maintenance reminders por roof age",
    ],
    capacity: "Capacidad típica: $1.5M–$2.4M anualizado en pipeline recovery",
  },
];

export const PlanSection = () => {
  return (
    <section id="plan" className="py-32 md:py-40 px-6 md:px-10 scroll-mt-32 bg-warm">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">El Plan</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Un sistema operativo comercial completo.
            <br />
            <em className="italic font-light text-foreground/85">Implementado en fases.</em>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-10">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <article className="border border-border/60 bg-background/60 backdrop-blur-sm p-8 md:p-12">
                <div className="text-foreground/30 tracking-[0.4em] text-xs select-none mb-6">
                  ━━━━━━━━━━━━━━━━━━
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    <span className="text-primary tabular mr-3">{p.n}</span>
                    <span className="font-medium">·</span>{" "}
                    <span className="italic font-light">{p.title}</span>
                  </h3>
                  <span className="small-caps text-foreground/55">{p.when}</span>
                </div>

                <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 text-foreground/85">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-snug">
                      <span className="text-primary shrink-0 select-none">→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 inline-flex items-center px-4 py-2 border border-primary/40 small-caps text-primary text-[0.65rem]">
                  {p.capacity}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
