import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  {
    q: "¿Cómo es diferente de otros voice agent services?",
    a: "Most voice agent services sell you a SaaS dashboard and disappear. We build the agent on your real call data, integrate it into Salesforce, and operate it weekly. You don't manage tooling — you read the report.",
  },
  {
    q: "¿Qué pasa si ya intentamos AI antes y no funcionó? (ZyraTalk)",
    a: "ZyraTalk y similar tools son chatbots, no voice agents. La diferencia es claritas: latencia <600ms, voz natural, comprensión bilingüe nativa. Y, crítico, alguien (nosotros) es accountable cada semana por el outcome.",
  },
  {
    q: "¿Y si ya tenemos Salesforce y no queremos cambiar?",
    a: "Perfecto. No reemplazamos Salesforce — vivimos dentro. Sync bidireccional, leads y actividades llegan automáticamente a sus pipelines existentes.",
  },
  {
    q: "¿Cuánto tiempo hasta estar live?",
    a: "Voice inbound + form callback live en día 7. Multi-canal en semana 4. Reactivation campaign mes 2. No big-bang launch — escalonado para no romper operación.",
  },
  {
    q: "¿Habla español de verdad?",
    a: "Bilingüe nativo, no traducido. Maria detecta el idioma en la primera frase y lo mantiene. Acentos cubano, colombiano, argentino — funciona como un local.",
  },
  {
    q: "¿Qué pasa si falla una llamada?",
    a: "Fallback automático: voicemail → SMS al cliente con link de booking → notificación al equipo en <2min. Cero leads perdidos por error técnico.",
  },
  {
    q: "¿Y el mercado de hurricane season — puede manejar el spike?",
    a: "Sí. Plantillas hurricane pre-cargadas, capacidad elástica (no cuello de botella humano), priorización automática de emergency vs. routine. Diseñado exactamente para Junio–Noviembre.",
  },
  {
    q: "¿Qué pasa con los 5,000+ contactos históricos?",
    a: "En Fase 4 lanzamos campaña de reactivación segmentada por roof age, project type, y last contact. Conservador: 1.5–3% conversion = $400K–$800K en pipeline dormido.",
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
            Las respuestas <em className="italic font-light">honestas.</em>
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
