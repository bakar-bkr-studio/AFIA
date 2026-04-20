import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { MissionGrid } from "@/components/sections/MissionGrid";
import { ActualitesSection } from "@/components/sections/ActualitesSection";
import { ProjetsTeaser } from "@/components/sections/ProjetsTeaser";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <MissionGrid />
      <ActualitesSection />
      <ProjetsTeaser />
      <CtaSection />
    </>
  );
}
