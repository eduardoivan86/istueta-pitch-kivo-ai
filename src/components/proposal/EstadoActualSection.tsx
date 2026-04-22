import { Reveal } from "@/components/site/Reveal";

const competitors = [
  { name: "Istueta Roofing", year: "1985", pos: "Premium heritage, family-owned", modernity: "⚠️", highlight: true },
  { name: "Earl W. Johnston", year: "1952", pos: "Volume legacy", modernity: "🟡" },
  { name: "Roofer Mike Inc", year: "~1995", pos: "Mid-market generalist", modernity: "⚠️" },
  { name: "Perkins Roofing", year: "1980", pos: "Commercial-leaning", modernity: "🟡" },
  { name: "T&S Roofing Systems", year: "2004", pos: "Residential mid-tier", modernity: "🟡" },
  { name: "Best Roofing", year: "1978", pos: "Scale (295 employees)", modernity: "🟢" },
  { name: "A&E Brothers", year: "2006", pos: "Hispanic mid-market", modernity: "⚠️" },
  { name: "iRoof Florida", year: "—", pos: "Digital-first newcomer", modernity: "🟢" },
  { name: "T&E Roofing", year: "—", pos: "Local operator", modernity: "⚠️" },
];

const painStats = [
  ["27–62%", "Missed calls (industry average)"],
  ["$500–$1,200", "Per missed call"],
  ["$48K / yr", "Bilingual receptionist in Miami"],
  ["<30 sec", "Response time → 391% more conversion"],
  ["85%", "Never call back if you don't answer"],
  ["78%", "Buy from whoever responds first"],
  ["5 min", "Drops qualification odds by 80%"],
  ["79%", "Of roofing contractors don't use AI in 2026"],
];

const hoyKivo = [
  ["Receptionist clocks out at 5pm", "Maria answers 24/7/365"],
  ["Saturday-morning leads → Monday reply", "Saturday-morning leads → instant call"],
  ["WhatsApp read tomorrow", "WhatsApp answered in seconds"],
  ["Voicemail = dead lead", "Voicemail = auto callback in 2 min"],
  ["Spanish depends on who's at the desk", "Native bilingual from day one"],
  ["5,000 old contacts untouched", "5,000 contacts reactivated in 30 days"],
  ["Quote takes 3 days", "Quote goes out the same day"],
  ["Instagram DMs unanswered", "DMs qualified and booked"],
  ["No idea which leads closed", "Weekly dashboard, every lead tracked"],
  ["Hurricane spike = no capacity", "Spike absorbed without hiring"],
  ["Salesforce stale", "Bidirectional sync, always current"],
  ["Follow-up depends on the sales rep", "Follow-up automated by channel"],
  ["Marketing $$ on leads that die", "Marketing $$ on leads that close"],
];

export const EstadoActualSection = () => {
  return (
    <section id="estado" className="bg-background py-32 md:py-40 px-6 md:px-10 scroll-mt-32">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">Current State</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Istueta has the strongest heritage positioning in the premium market.
            <br />
            <em className="italic font-light text-foreground/85">
              And the weakest digital presence of Tier 1.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            We mapped the 9 most relevant competitors in South Florida roofing. What we found
            isn't just a gap — it's an open window.
          </p>
        </Reveal>

        {/* Competitor table desktop */}
        <div className="mt-16 hidden md:block border-t border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="small-caps text-foreground/55 text-[0.65rem]">
                <Th>Company</Th>
                <Th>Founded</Th>
                <Th>Positioning</Th>
                <Th center>Voice AI</Th>
                <Th center>Chat AI</Th>
                <Th center>WhatsApp</Th>
                <Th center>Digital Modernity</Th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.name}
                  className={`border-b border-border/50 ${c.highlight ? "bg-cream text-on-cream" : "text-foreground/85"}`}
                >
                  <Td bold>{c.name}</Td>
                  <Td>{c.year}</Td>
                  <Td>{c.pos}</Td>
                  <Td center><X /></Td>
                  <Td center><X /></Td>
                  <Td center><X /></Td>
                  <Td center>{c.modernity}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden mt-12 space-y-4">
          {competitors.map((c) => (
            <div
              key={c.name}
              className={`p-5 border ${
                c.highlight ? "bg-cream text-on-cream border-primary" : "border-border bg-card"
              }`}
            >
              <p className="font-display text-lg">{c.name} <span className="text-foreground/40 text-sm">· {c.year}</span></p>
              <p className="text-sm mt-1 opacity-75">{c.pos}</p>
              <div className="mt-4 grid grid-cols-4 gap-2 small-caps text-[0.6rem] opacity-75 text-center">
                <div>Voice<br /><X /></div>
                <div>Chat<br /><X /></div>
                <div>WA<br /><X /></div>
                <div>Modern<br />{c.modernity}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Insight callout */}
        <Reveal delay={120}>
          <div className="mt-16 bg-cream text-on-cream p-8 md:p-10 border-l-4 border-primary">
            <p className="small-caps text-primary mb-3">🔑 Critical insight</p>
            <p className="font-display text-xl md:text-2xl leading-snug">
              None of Istueta's 9 direct competitors have voice AI, chat AI, or functional
              multi-channel automation in 2026.{" "}
              <em className="italic">This is the exact moment to leap.</em>
            </p>
          </div>
        </Reveal>

        {/* Pain stats */}
        <h3 className="mt-28 font-display text-3xl md:text-4xl tracking-tight max-w-2xl">
          The cost of the status quo, in numbers.
        </h3>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {painStats.map(([n, l], i) => (
            <Reveal key={n} delay={i * 40}>
              <div className="border-t border-border pt-5">
                <div className="font-display text-primary tabular text-3xl md:text-[42px] leading-none tracking-[-0.02em]">
                  {n}
                </div>
                <p className="mt-3 text-foreground/65 text-sm leading-snug">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hidden cost block */}
        <Reveal delay={120}>
          <div className="mt-20 bg-deep border border-border p-8 md:p-10 font-mono text-sm md:text-[15px] text-foreground/85 leading-relaxed">
            <p className="small-caps text-primary text-[0.65rem] mb-5">// Hidden Cost Calculation</p>
            <p className="text-foreground">Conservative model for Istueta:</p>
            <p className="mt-3">  • ~150 inbound leads/month</p>
            <p>  • 27% miss rate = 40.5 lost leads/month</p>
            <p>  • 5% close rate on leads answered</p>
            <p>  • $18,000 avg project value</p>
            <p className="mt-5">Revenue leaking, conservative:{" "}
              <span className="text-primary font-bold">$36,450/mo = $437,400/yr</span>
            </p>
            <p>Revenue leaking, realistic:{" "}
              <span className="text-primary font-bold">$800,000 — $1,200,000/yr</span>
            </p>
          </div>
        </Reveal>

        {/* Today vs Kivo */}
        <h3 className="mt-28 font-display text-3xl md:text-4xl tracking-tight">
          Today vs. <em className="italic font-light">With Kivo.</em>
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-6 md:p-8">
            <p className="small-caps text-destructive mb-6">Today</p>
            <ul className="space-y-3.5 text-foreground/85 text-sm md:text-[15px]">
              {hoyKivo.map(([h]) => (
                <li key={h} className="flex gap-3">
                  <span className="text-destructive shrink-0">❌</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="small-caps text-success mb-6">With Kivo</p>
            <ul className="space-y-3.5 text-foreground/85 text-sm md:text-[15px]">
              {hoyKivo.map(([, k]) => (
                <li key={k} className="flex gap-3">
                  <span className="text-success shrink-0">✅</span>
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Th = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <th className={`py-4 pr-4 align-bottom font-medium ${center ? "text-center" : ""}`}>
    {children}
  </th>
);
const Td = ({ children, center, bold }: { children: React.ReactNode; center?: boolean; bold?: boolean }) => (
  <td className={`py-5 pr-4 align-middle ${center ? "text-center" : ""} ${bold ? "font-display text-base" : ""}`}>
    {children}
  </td>
);
const X = () => <span className="text-destructive small-caps text-[0.65rem]">No</span>;
