import { useEffect, useState } from "react";
import { TopNav } from "@/components/site/TopNav";

import { HeroSection } from "@/components/landing/HeroSection";
import { VoiceOrbSection } from "@/components/landing/VoiceOrbSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { DifferenceSection } from "@/components/landing/DifferenceSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ServiceAreasSection } from "@/components/landing/ServiceAreasSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FooterLanding } from "@/components/landing/FooterLanding";

import { SubNav } from "@/components/proposal/SubNav";
import { ProposalHero } from "@/components/proposal/ProposalHero";
import { QuoteBlock } from "@/components/proposal/QuoteBlock";
import { PanoramaSection } from "@/components/proposal/PanoramaSection";
import { EstadoActualSection } from "@/components/proposal/EstadoActualSection";
import { PlanSection } from "@/components/proposal/PlanSection";
import { CapabilitiesSection } from "@/components/proposal/CapabilitiesSection";
import { CasosSection } from "@/components/proposal/CasosSection";
import { InversionSection } from "@/components/proposal/InversionSection";
import { FAQSection } from "@/components/proposal/FAQSection";
import { ProximosSection } from "@/components/proposal/ProximosSection";
import { FooterProposal } from "@/components/proposal/FooterProposal";

type Tab = "landing" | "proposal";

const Index = () => {
  const [tab, setTab] = useState<Tab>("landing");

  // Reset scroll on tab change for clean tab feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [tab]);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <TopNav active={tab} onChange={setTab} />

      {tab === "landing" ? (
        <>
          <HeroSection />
          <VoiceOrbSection />
          <TrustSection />
          <ServicesSection />
          <DifferenceSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <ServiceAreasSection />
          <ContactSection />
          <FooterLanding />
        </>
      ) : (
        <>
          <ProposalHero />
          <SubNav />
          <QuoteBlock
            quote="Most voice agent services sell you a generic SaaS, hand you a dashboard, and disappear. Kivo is the opposite: we learn your business before we build the agent, we wire it into the tools you actually use, and we operate it every week."
            support="We build, train, and operate the agent for you. You watch the results land."
          />
          <PanoramaSection />
          <EstadoActualSection />
          <PlanSection />
          <CapabilitiesSection />
          <QuoteBlock
            quote="We're not the cheapest. We're the ones who actually deliver."
            support={
              <>
                That's why Harvey Windows, JP Medical Center, Dental Care of Deerfield Beach, and
                Lumber Plus keep running with us — not because the tech is perfect, but because
                someone is accountable for the outcome every week.
              </>
            }
          />
          <CasosSection />
          <InversionSection />
          <FAQSection />
          <ProximosSection />
          <FooterProposal />
        </>
      )}
    </main>
  );
};

export default Index;
