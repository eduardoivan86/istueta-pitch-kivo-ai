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
  ["27–62%", "calls perdidos (industry average)"],
  ["$500–$1,200", "por call perdido"],
  ["$48K / yr", "bilingual receptionist Miami"],
  ["<30 sec", "response time → 391% más conversión"],
  ["85%", "no vuelve a llamar si no respondés"],
  ["78%", "compra al primer responder"],
  ["5 min", "drops 80% qualification odds"],
  ["79%", "roofing contractors NO usa AI en 2026"],
];

const hoyKivo = [
  ["Recepcionista cuelga a las 5pm", "Maria responde 24/7/365"],
  ["Saturday morning leads → lunes", "Saturday morning leads → llamada inmediata"],
  ["WhatsApp leído mañana", "WhatsApp respondido en segundos"],
  ["Voicemail = lead muerto", "Voicemail = callback automático en 2 min"],
  ["Español depende del receptionist", "Bilingüe nativo desde día 1"],
  ["5,000 contactos viejos sin tocar", "5,000 contactos reactivados en 30 días"],
  ["Quote tarda 3 días", "Quote sale el mismo día"],
  ["Instagram DMs sin responder", "DMs calificados y agendados"],
  ["No saben qué leads cerraron", "Dashboard semanal con cada lead trackeado"],
  ["Hurricane spike sin capacidad", "Spike absorbido sin contratar"],
  ["Salesforce desactualizado", "Sync bidireccional automático"],
  ["Follow-up depende del sales rep", "Follow-up automatizado por canal"],
  ["Marketing $$ a leads que mueren", "Marketing $$ a leads que cierran"],
];

export const EstadoActualSection = () => {
  return (
    <section id="estado" className="bg-background py-32 md:py-40 px-6 md:px-10 scroll-mt-32">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="small-caps text-primary mb-6">Estado Actual</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-[56px] tracking-tight leading-[1.05] max-w-4xl">
            Istueta tiene el mejor heritage positioning del mercado premium.
            <br />
            <em className="italic font-light text-foreground/85">
              Y el peor digital presence del Tier 1.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-foreground/70 leading-relaxed">
            Mapeamos a los 9 competidores más relevantes en South Florida roofing. Lo que
            encontramos no es solo una brecha — es una ventana abierta.
          </p>
        </Reveal>

        {/* Competitor table desktop */}
        <div className="mt-16 hidden md:block border-t border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="small-caps text-foreground/55 text-[0.65rem]">
                <Th>Empresa</Th>
                <Th>Fundada</Th>
                <Th>Posicionamiento</Th>
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
            <p className="small-caps text-primary mb-3">🔑 Insight crítico</p>
            <p className="font-display text-xl md:text-2xl leading-snug">
              Ninguno de los 9 competidores directos de Istueta tiene voice AI, chat AI, ni
              automatización multicanal funcional en 2026.{" "}
              <em className="italic">Este es el momento exacto de salto.</em>
            </p>
          </div>
        </Reveal>

        {/* Pain stats */}
        <h3 className="mt-28 font-display text-3xl md:text-4xl tracking-tight max-w-2xl">
          El costo del status quo, en cifras.
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
            <p className="text-foreground">Modelo conservador para Istueta:</p>
            <p className="mt-3">  • ~150 inbound leads/mes</p>
            <p>  • 27% miss rate = 40.5 leads perdidos/mes</p>
            <p>  • 5% close rate sobre leads respondidos</p>
            <p>  • $18,000 avg project value</p>
            <p className="mt-5">Revenue escapando conservador:{" "}
              <span className="text-primary font-bold">$36,450/mes = $437,400/año</span>
            </p>
            <p>Revenue escapando realista:{" "}
              <span className="text-primary font-bold">$800,000 — $1,200,000/año</span>
            </p>
          </div>
        </Reveal>

        {/* Hoy vs Kivo */}
        <h3 className="mt-28 font-display text-3xl md:text-4xl tracking-tight">
          Hoy vs. <em className="italic font-light">Con Kivo.</em>
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-6 md:p-8">
            <p className="small-caps text-destructive mb-6">Hoy</p>
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
            <p className="small-caps text-success mb-6">Con Kivo</p>
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
