export const FooterLanding = () => {
  return (
    <footer className="bg-deep py-24 px-6 md:px-10 border-t border-border/40">
      <div className="max-w-editorial mx-auto">
        <h3 className="font-display text-6xl md:text-8xl tracking-tight text-foreground">
          Istueta<span className="text-primary">.</span>
        </h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground/65">
          <p className="small-caps text-[0.7rem]">
            7501 NW 7TH ST<br />
            Miami, FL 33126
          </p>
          <p className="small-caps text-[0.7rem]">
            (305) 671-9190<br />
            FL License: CCC054759
          </p>
          <p className="small-caps text-[0.7rem]">
            Family-owned<br />
            since 1985
          </p>
        </div>
        <div className="editorial-rule mt-16 mb-8" />
        <p className="small-caps text-foreground/40 text-[0.65rem]">
          © 2026 · Concept design by Kivo AI
        </p>
      </div>
    </footer>
  );
};
