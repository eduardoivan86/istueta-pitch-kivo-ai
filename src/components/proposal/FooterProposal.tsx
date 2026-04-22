export const FooterProposal = () => {
  return (
    <footer className="py-24 px-6 md:px-10 border-t border-border/40" style={{ backgroundColor: "hsl(222 14% 5%)" }}>
      <div className="max-w-editorial mx-auto">
        <h3 className="font-display text-6xl md:text-8xl tracking-tight text-foreground">
          Kivo<span className="text-primary">.</span>
        </h3>
        <p className="mt-6 max-w-md text-foreground/65 leading-relaxed">
          Commercial-agent platform for businesses done losing leads.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 small-caps text-foreground/60 text-[0.7rem]">
          <div>
            <p className="text-foreground mb-4">Product</p>
            <ul className="space-y-2.5">
              <li>Voice agents</li>
              <li>Multi-channel</li>
              <li>Integrations</li>
              <li>Operations</li>
            </ul>
          </div>
          <div>
            <p className="text-foreground mb-4">Company</p>
            <ul className="space-y-2.5">
              <li>About</li>
              <li>Customers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-foreground mb-4">Not online yet</p>
            <ul className="space-y-2.5">
              <li>Kivo Studio</li>
              <li>Branding · Web</li>
              <li>SEO · Ads · Content</li>
            </ul>
          </div>
        </div>

        <div className="editorial-rule mt-20 mb-8" />
        <div className="flex flex-col md:flex-row md:justify-between gap-3 small-caps text-foreground/40 text-[0.65rem]">
          <p>© 2026 · Kivo AI · Propuesta confidencial para Istueta Roofing</p>
          <p>Eduardo Collazos · eduardo@usekivo.ai · usekivo.ai</p>
        </div>
      </div>
    </footer>
  );
};
