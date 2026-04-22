import { Reveal } from "@/components/site/Reveal";

const phases = [
  {
    n: "Phase 1",
    title: "Foundation",
    when: "Week 1",
    bullets: [
      "Inbound voice agent — bilingual from day one",
      "Form callback automation",
      "Weekly operations dashboard",
      "Trained on Istueta tone, products, geography",
      "Hurricane templates pre-loaded",
      "Email + SMS alerts for your team",
    ],
    capacity: "Typical capacity: 100–250 calls/day with zero hold time",
  },
  {
    n: "Phase 2",
    title: "Salesforce & Intelligent Follow-up",
    when: "Week 2–3",
    bullets: [
      "Salesforce integration (bidirectional read + write)",
      "Calendar sync for real-time availability check",
      "Smart email routing with auto-confirmation + call summary to the right team member",
      "SMS follow-up automation tailored by lead type",
      "Smart routing to sales team based on project type and urgency",
    ],
    capacity: "Typical capacity: zero leads slip through the cracks, full CRM sync",
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

        {/* Optional future add-ons */}
        <div className="mt-24 pt-20 border-t border-border/40">
          <Reveal>
            <p className="small-caps text-foreground/55 mb-4">Optional — When you're ready to scale</p>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight max-w-3xl mb-8">
              Everything beyond. <em className="italic font-light text-foreground/75">At your pace.</em>
            </h3>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-foreground/70 max-w-2xl leading-relaxed mb-12">
              Once Foundation is stable and you're ready to expand, these are the
              natural next steps. No commitment today — we activate them when the timing makes sense.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={200}>
              <div className="bg-background border border-border p-6">
                <p className="small-caps text-primary text-[0.65rem] mb-3">Multi-Channel Expansion</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• WhatsApp Business API</li>
                  <li>• Instagram DMs auto-response + qualification</li>
                  <li>• Facebook Messenger unified inbox</li>
                  <li>• Cross-channel context (one conversation)</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="bg-background border border-border p-6">
                <p className="small-caps text-primary text-[0.65rem] mb-3">Revenue Recovery + Operational AI</p>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Reactivation campaign over 5,000+ dormant contacts</li>
                  <li>• Auto-quote generation by project type</li>
                  <li>• Document management (insurance, permits)</li>
                  <li>• Hurricane spike auto-handling with priority routing</li>
                  <li>• Proactive maintenance reminders based on roof age</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
