import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  {
    q: "How is this different from other voice agent services?",
    a: "Most voice agent services sell you a SaaS dashboard and disappear. We build the agent on your real call data, integrate it into Salesforce, and operate it weekly. You don't manage tooling — you read the report.",
  },
  {
    q: "What if we already tried AI before and it didn't work? (ZyraTalk)",
    a: "ZyraTalk and similar tools are chatbots, not voice agents. The difference is clear: sub-600ms latency, natural voice, native bilingual understanding. And, critically, someone (us) is accountable every week for the outcome.",
  },
  {
    q: "What if we already have Salesforce and don't want to change it?",
    a: "Perfect. We don't replace Salesforce — we live inside it. Bidirectional sync. Leads and activity land automatically in your existing pipelines.",
  },
  {
    q: "How long until we're live?",
    a: "Voice inbound + form callback live on day 7. Multi-channel in week 4. Reactivation campaign in month 2. No big-bang launch — staged so your operations never break.",
  },
  {
    q: "Does it actually speak Spanish?",
    a: "Native bilingual, not translated. Carlos detects the language in the first phrase and holds it. Cuban, Colombian, Argentine accents — it sounds like a local.",
  },
  {
    q: "What happens if a call fails?",
    a: "Automatic fallback: voicemail → SMS to the customer with a booking link → notification to the team in under 2 minutes. Zero leads lost to technical error.",
  },
  {
    q: "What about hurricane season — can it handle the spike?",
    a: "Yes. Pre-loaded hurricane templates, elastic capacity (no human bottleneck), automatic prioritization of emergency vs. routine. Designed exactly for June through November.",
  },
  {
    q: "What happens with the 5,000+ historical contacts?",
    a: "In Phase 4 we launch a segmented reactivation campaign by roof age, project type, and last contact. Conservative: 1.5–3% conversion = $400K–$800K in dormant pipeline.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-32 md:py-40 px-6 md:px-10 scroll-mt-32">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">FAQ</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-3xl">
            The <em className="italic font-light">honest</em> answers.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-7 flex items-start justify-between gap-6 group"
              >
                <span className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors max-w-3xl">
                  {f.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 mt-1 text-foreground/50 transition-transform ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-editorial ${
                  open === i ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-foreground/70 leading-relaxed max-w-3xl">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
