import { Reveal } from "@/components/site/Reveal";

const caps = [
  { n: "01", title: "Voice", line: "Voice that actually sounds human", desc: "Latency under 600ms. Bilingual without translating. Trained on roofing vocabulary." },
  { n: "02", title: "Chat", line: "Every channel, one brain", desc: "Web, WhatsApp, Instagram, SMS. Same context. No repeating yourself." },
  { n: "03", title: "Languages", line: "Native, not translated", desc: "Carlos switches mid-sentence. Cubano, Colombiano, Argentino — sounds local." },
  { n: "04", title: "Automations", line: "Follow-ups that never forget", desc: "Quote sent → 24h check-in → 72h close attempt → reactivation in 30 days." },
  { n: "05", title: "Inventory", line: "Knows what's actually in stock", desc: "Live sync with your supplier. Won't quote tile that's 6 weeks out." },
  { n: "06", title: "Triggers", line: "Campaigns that react in real time", desc: "Hurricane warning issued → emergency response sequence ships in 4 minutes." },
  { n: "07", title: "Integrations", line: "Lives inside your stack", desc: "Salesforce, Twilio, Google Workspace, QuickBooks. We meet your tools." },
  { n: "08", title: "Managed", line: "You never touch a dashboard", desc: "We tune, monitor, and report weekly. You watch the calendar fill up." },
];

export const CapabilitiesSection = () => {
  return (
    <section id="roadmap" className="bg-background py-32 md:py-40 px-6 md:px-10 scroll-mt-32">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">The Platform</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Eight capabilities. One platform.
            <br />
            <em className="italic font-light text-foreground/85">
              Operated by us, reporting to you.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            Most "AI agent" companies sell you tools. We sell you outcomes — and we run the
            machinery that produces them. Here's what's under the hood.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {caps.map((c, i) => (
            <Reveal key={c.n} delay={i * 50}>
              <article className="bg-background p-6 md:p-8 h-full group hover:bg-card transition-colors">
                <p className="small-caps text-foreground/50 text-[0.65rem] mb-6">
                  {c.n} / {c.title}
                </p>
                <h3 className="font-display italic text-xl md:text-2xl leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {c.line}
                </h3>
                <div className="editorial-rule my-6 opacity-50" />
                <p className="text-foreground/65 text-sm leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
