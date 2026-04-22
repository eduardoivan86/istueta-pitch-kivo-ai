interface QuoteBlockProps {
  quote: string;
  support: string | React.ReactNode;
}

export const QuoteBlock = ({ quote, support }: QuoteBlockProps) => {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 md:px-10 text-on-cream">
      <div className="max-w-editorial mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-1 flex">
            <span
              className="block w-1 self-stretch"
              style={{ background: "hsl(var(--primary))" }}
            />
          </div>
          <div className="col-span-12 md:col-span-11 md:pl-2">
            <blockquote className="font-display italic text-2xl sm:text-3xl md:text-[40px] leading-[1.25] tracking-tight text-on-cream max-w-4xl">
              "{quote}"
            </blockquote>
            <div className="mt-10 max-w-2xl text-on-cream/70 leading-relaxed">{support}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
