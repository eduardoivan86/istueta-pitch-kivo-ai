import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

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
            A real expert will call you within 5 minutes — even after hours, weekends, or holidays.
          </p>
        </Reveal>

        <Reveal delay={200}>
          {submitted ? (
            <div className="mt-14 text-center border border-primary/40 p-10 bg-primary/5">
              <p className="font-display italic text-xl text-foreground">
                "Got it. Maria will call you within the next 5 minutes."
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-14 space-y-4 max-w-[560px] mx-auto"
            >
              <Field label="Full Name" type="text" required />
              <Field label="Email Address" type="email" required />
              <Field label="Phone Number" type="tel" required />
              <Field label="ZIP Code" type="text" maxLength={5} required />
              <SelectField
                label="Service Interested In"
                options={[
                  "Roof Replacement",
                  "Roof Repair",
                  "Roof Maintenance",
                  "Roof Inspection",
                  "New Construction",
                  "Waterproofing",
                  "Other",
                ]}
              />
              <button
                type="submit"
                className="mt-6 w-full h-14 bg-primary text-primary-foreground small-caps hover:bg-primary/90 transition-colors"
              >
                Request callback
              </button>
              <p className="text-center font-display italic text-foreground/40 text-sm pt-4">
                "Got it. Maria will call you within the next 5 minutes."
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="block">
    <span className="small-caps text-foreground/55 text-[0.65rem] block mb-1.5">{label}</span>
    <input
      {...rest}
      className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none text-foreground transition-colors px-1"
    />
  </label>
);

const SelectField = ({ label, options }: { label: string; options: string[] }) => (
  <label className="block">
    <span className="small-caps text-foreground/55 text-[0.65rem] block mb-1.5">{label}</span>
    <select
      className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none text-foreground transition-colors px-1"
      defaultValue=""
    >
      <option value="" disabled className="bg-background">
        Select…
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-background">
          {o}
        </option>
      ))}
    </select>
  </label>
);
