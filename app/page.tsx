import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { MissionGrid } from "@/components/sections/MissionGrid";
import { RendezVousSection } from "@/components/sections/RendezVousSection";
import { ActualitesSection } from "@/components/sections/ActualitesSection";
import { TemoignagesSection } from "@/components/sections/TemoignagesSection";
import { GalerieSection } from "@/components/sections/GalerieSection";
import { BenevolesSection } from "@/components/sections/BenevolesSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <AboutTeaser />
      <MissionGrid />
      <RendezVousSection />
      <ActualitesSection />
      <TemoignagesSection />
      <GalerieSection />
      <BenevolesSection />
      <CtaSection />
    </>
  );
}
