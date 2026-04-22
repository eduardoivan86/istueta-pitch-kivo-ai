export const TrustSection = () => {
  const certs = ["Ludowici Tile", "GAF", "CertainTeed", "FL License CCC054759"];
  const ratings = ["★ 4.8 Facebook", "★ 4.4 Guild Quality", "★ 4.3 Houzz"];

  return (
    <section className="bg-cream py-24 md:py-28 px-6 md:px-10 text-on-cream">
      <div className="max-w-editorial mx-auto space-y-10">
        <Row items={certs} />
        <div className="editorial-rule opacity-30" />
        <Row items={ratings} />
      </div>
    </section>
  );
};

const Row = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
    {items.map((it, i) => (
      <div key={it} className="flex items-center gap-x-8 md:gap-x-12">
        <span className="small-caps text-on-cream/80 text-[0.72rem]">{it}</span>
        {i < items.length - 1 && (
          <span className="hidden sm:block w-px h-4 bg-on-cream/20" style={{ background: "hsl(var(--surface-cream-foreground)/0.25)" }} />
        )}
      </div>
    ))}
  </div>
);
