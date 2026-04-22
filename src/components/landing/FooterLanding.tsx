export const FooterLanding = () => {
  return (
    <footer className="bg-deep py-24 md:py-28 px-6 md:px-10 border-t border-border/40">
      <div className="max-w-editorial mx-auto">
        <h3 className="font-display text-6xl md:text-8xl tracking-tight text-foreground">
          Istueta<span className="text-primary">.</span>
        </h3>
        <p className="mt-4 font-display italic text-foreground/60 text-lg md:text-xl max-w-xl">
          Family-owned. Factory-certified. Bilingual. Miami-proud. Since 1985.
        </p>

        <div className="editorial-rule mt-14 mb-12 opacity-40" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Contact */}
          <div>
            <p className="small-caps text-primary text-[0.65rem] mb-5">Istueta Roofing</p>
            <address className="not-italic space-y-1.5 text-foreground/80 text-sm leading-relaxed">
              <p>7501 NW 7TH ST</p>
              <p>Miami, FL 33126</p>
              <p className="pt-3">
                <a href="tel:+13056719190" className="hover:text-primary transition-colors">
                  (305) 671-9190
                </a>
              </p>
              <p className="small-caps text-foreground/50 text-[0.65rem] tracking-wider pt-2">
                FL License CCC054759
              </p>
            </address>
          </div>

          {/* Service areas */}
          <div>
            <p className="small-caps text-primary text-[0.65rem] mb-5">Service Areas</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-foreground/80 text-sm">
              <li>Miami</li>
              <li>Miami Shores</li>
              <li>Coral Gables</li>
              <li>Pinecrest</li>
              <li>Palmetto Bay</li>
              <li>Kendall</li>
              <li>Bay Point</li>
              <li>Miami-Dade</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <p className="small-caps text-primary text-[0.65rem] mb-5">Certifications</p>
            <ul className="space-y-1.5 text-foreground/80 text-sm">
              <li>Ludowici Tile</li>
              <li>GAF</li>
              <li>CertainTeed</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 small-caps text-foreground/55 text-[0.6rem] tracking-wider">
              <span>★ 4.8 Facebook</span>
              <span>★ 4.4 Guild Quality</span>
              <span>★ 4.3 Houzz</span>
            </div>
          </div>
        </div>

        <div className="editorial-rule mt-16 mb-6 opacity-30" />

        <div className="flex flex-col md:flex-row md:justify-between gap-2 small-caps text-foreground/40 text-[0.6rem] tracking-wider">
          <p>© 2026 Istueta Roofing · All rights reserved</p>
          <p>
            Concept design by{" "}
            <a href="mailto:eduardo@usekivo.ai" className="hover:text-primary transition-colors">
              Kivo AI · eduardo@usekivo.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
