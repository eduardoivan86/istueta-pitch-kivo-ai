import { Reveal } from "@/components/site/Reveal";

const phases = [
  {
    n: "Phase 1",
    title: "Foundation",
    when: "Weeks 1–2",
    bullets: [
      "Inbound voice agent — bilingual from day one",
      "Form callback automation",
      "Weekly operations dashboard",
      "Salesforce integration (read + write)",
      "Trained on Istueta tone, products, geography",
      "Hurricane templates pre-loaded",
    ],
    capacity: "Typical capacity: 100–250 calls/day with zero hold time",
  },
  {
    n: "Phase 2",
    title: "Digital Expansion",
    when: "Weeks 3–4",
    bullets: [
      "Voice widget on istuetaroofing.com",
      "Chat widget sharing the same brain",
      "SMS follow-up automation",
      "Qualification scoring by project type",
      "Smart routing to Eduardo / sales team",
    ],
    capacity: "Typical capacity: 100% web coverage without adding staff",
  },
  {
    n: "Phase 3",
    title: "Multi-Channel Conquest",
    when: "Month 2",
    bullets: [
      "WhatsApp Business API integration",
      "Instagram DMs — auto-response + qualification",
      "Facebook Messenger unified inbox",
      "Real-time bidirectional Salesforce sync",
      "Cross-channel context (no repeating info)",
      "Voice ↔ chat ↔ WhatsApp handoff without friction",
    ],
    capacity: "Typical capacity: 4 channels, one conversation per customer",
  },
  {
    n: "Phase 4",
    title: "Revenue Recovery + Operational AI",
    when: "Month 3+",
    bullets: [
      "Reactivation campaign over 5,000+ dormant contacts",
      "Auto-quote generation by project type",
      "Post-visit email automation with next steps",
      "Document management (insurance, permits, contracts)",
      "Hurricane season templates + automatic spike handling",
      "Proactive maintenance reminders based on roof age",
    ],
    capacity: "Typical capacity: $1.5M–$2.4M annualized in pipeline recovery",
  },
];

export const PlanSection = () => {
  return (
    <section id="plan" className="py-32 md:py-40 px-6 md:px-10 scroll-mt-32 bg-warm">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">The Plan</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            A complete commercial operating system.
            <br />
            <em className="italic font-light text-foreground/85">Rolled out in phases.</em>
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
