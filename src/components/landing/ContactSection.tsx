import { useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";

const LC_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export const ContactSection = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${LC_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = LC_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="bg-background py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05] tracking-tight text-center">
            Fix your roof right the first time.
            <br />
            <em className="italic font-light text-foreground/85">Schedule your consultation.</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-center text-foreground/60 max-w-lg mx-auto">
            A real expert will call you within 5 minutes — even after hours, on weekends, or during
            holidays.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 w-full" style={{ minHeight: "600px" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ikA69AY49GTbdSWYLyam"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "600px",
                border: "none",
                borderRadius: "4px",
              }}
              id="inline-ikA69AY49GTbdSWYLyam"
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Istueta - Lead Generation"
              data-height="undefined"
              data-layout-iframe-id="inline-ikA69AY49GTbdSWYLyam"
              data-form-id="ikA69AY49GTbdSWYLyam"
              title="Istueta - Lead Generation"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
