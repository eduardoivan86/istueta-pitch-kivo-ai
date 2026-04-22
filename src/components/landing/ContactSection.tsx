import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  service: "",
  message: "",
};

const services = [
  "Roof Replacement",
  "Roof Repair",
  "Roof Maintenance",
  "Roof Inspection",
  "New Construction",
  "Waterproofing",
  "Other",
];

export const ContactSection = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

    // Demo fallback: if no key, simulate success after 1.2s
    if (!accessKey) {
      setTimeout(() => setStatus("success"), 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Istueta Roofing lead (pitch demo)",
          from_name: "Istueta Pitch Demo",
          ...form,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error.");
    }
  };

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
          {status === "success" ? (
            <div className="mt-14 text-center border border-success/50 bg-success/5 p-10">
              <div className="text-success text-4xl mb-4 leading-none">✓</div>
              <p className="font-display italic text-xl md:text-2xl text-foreground leading-snug">
                Got it. Carlos will call you within the next 5 minutes —
                <br className="hidden md:block" />
                even on weekends, after hours, or holidays.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-14 space-y-4 max-w-[560px] mx-auto">
              <Field
                label="Full Name"
                type="text"
                required
                value={form.name}
                onChange={onChange("name")}
                disabled={status === "submitting"}
              />
              <Field
                label="Email Address"
                type="email"
                required
                value={form.email}
                onChange={onChange("email")}
                disabled={status === "submitting"}
              />
              <Field
                label="Phone Number"
                type="tel"
                required
                value={form.phone}
                onChange={onChange("phone")}
                disabled={status === "submitting"}
              />
              <Field
                label="ZIP Code"
                type="text"
                inputMode="numeric"
                maxLength={5}
                required
                value={form.zip}
                onChange={onChange("zip")}
                disabled={status === "submitting"}
              />
              <label className="block">
                <span className="small-caps text-foreground/55 text-[0.65rem] block mb-1.5">
                  Service Interested In
                </span>
                <select
                  required
                  value={form.service}
                  onChange={onChange("service")}
                  disabled={status === "submitting"}
                  className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none text-foreground transition-colors px-1 disabled:opacity-60"
                >
                  <option value="" disabled className="bg-background">
                    Select…
                  </option>
                  {services.map((o) => (
                    <option key={o} value={o} className="bg-background">
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="small-caps text-foreground/55 text-[0.65rem] block mb-1.5">
                  Message (optional)
                </span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={onChange("message")}
                  disabled={status === "submitting"}
                  className="w-full bg-transparent border-b border-border focus:border-primary focus:outline-none text-foreground transition-colors px-1 py-2 resize-none disabled:opacity-60"
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full h-14 bg-primary text-primary-foreground small-caps hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-3"
              >
                {status === "submitting" ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Request callback"
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-destructive text-sm pt-2">
                  {errorMsg ?? "Something went wrong."} Call{" "}
                  <a href="tel:+13056719190" className="underline">
                    (305) 671-9190
                  </a>
                  .
                </p>
              )}

              <p className="text-center font-display italic text-foreground/40 text-sm pt-4">
                "Got it. Carlos will call you within the next 5 minutes."
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

const Field = ({ label, ...rest }: FieldProps) => (
  <label className="block">
    <span className="small-caps text-foreground/55 text-[0.65rem] block mb-1.5">{label}</span>
    <input
      {...rest}
      className="w-full h-12 bg-transparent border-b border-border focus:border-primary focus:outline-none text-foreground transition-colors px-1 disabled:opacity-60"
    />
  </label>
);
