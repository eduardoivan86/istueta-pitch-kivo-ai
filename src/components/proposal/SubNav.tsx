import { useEffect, useState } from "react";

const items = [
  { id: "panorama", label: "Market", icon: "🎯" },
  { id: "estado", label: "Current State", icon: "⚠️" },
  { id: "plan", label: "The Plan", icon: "💡" },
  { id: "roadmap", label: "Capabilities", icon: "🚀" },
  { id: "inversion", label: "Investment", icon: "💰" },
  { id: "faq", label: "FAQ", icon: "❓" },
];

export const SubNav = () => {
  const [active, setActive] = useState("panorama");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180;
      let cur = items[0].id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.offsetTop <= y) cur = it.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-background/85 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-editorial mx-auto px-6 md:px-10">
        <nav className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory py-3.5">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={`shrink-0 snap-start small-caps text-[0.7rem] py-1.5 border-b transition-colors ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-foreground/55 hover:text-foreground border-transparent"
                }`}
              >
                <span className="mr-1.5">{it.icon}</span>
                {it.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
