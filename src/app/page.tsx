import { HeroSection } from "@/components/sections/hero";
import { ConceptSection } from "@/components/sections/concept";
import { PositionSection } from "@/components/sections/position";
import { FunctionsSection } from "@/components/sections/functions";
import { FoundationSection } from "@/components/sections/foundation";
import { ChangesSection } from "@/components/sections/changes";
import { DirectionsSection } from "@/components/sections/directions";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ConceptSection />
      <PositionSection />
      <FunctionsSection />
      <FoundationSection />
      <ChangesSection />
      <DirectionsSection />
      <FooterSection />
    </main>
  );
}
