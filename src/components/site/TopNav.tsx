import { useEffect, useState } from "react";

type Tab = "landing" | "proposal";

interface TopNavProps {
  active: Tab;
  onChange: (t: Tab) => void;
}

export const TopNav = ({ active, onChange }: TopNavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-500 ease-editorial ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-editorial mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={() => onChange("landing")}
          className="font-display text-xl tracking-tight text-foreground"
          aria-label="Kivo home"
        >
          <span className="small-caps text-foreground/90 text-[0.7rem]">K · Kivo</span>
        </button>

        {/* Tab switcher */}
        <nav className="flex items-center gap-2 sm:gap-6">
          <TabBtn label="Landing" active={active === "landing"} onClick={() => onChange("landing")} />
          <span className="text-foreground/30 select-none">·</span>
          <TabBtn label="Propuesta" active={active === "proposal"} onClick={() => onChange("proposal")} />
        </nav>

        {/* Lang toggle */}
        <div className="hidden sm:flex items-center gap-2 small-caps text-foreground/60">
          <button
            onClick={() => setLang("EN")}
            className={`transition-colors ${lang === "EN" ? "text-primary" : "hover:text-foreground"}`}
          >
            EN
          </button>
          <span className="text-foreground/30">/</span>
          <button
            onClick={() => setLang("ES")}
            className={`transition-colors ${lang === "ES" ? "text-primary" : "hover:text-foreground"}`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
};

const TabBtn = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative small-caps py-2 transition-colors ${
      active ? "text-primary" : "text-foreground/70 hover:text-foreground"
    }`}
  >
    {label}
    <span
      className={`absolute left-0 right-0 -bottom-0.5 h-px transition-all ease-editorial ${
        active ? "bg-primary opacity-100" : "bg-foreground/0 opacity-0"
      }`}
    />
  </button>
);
