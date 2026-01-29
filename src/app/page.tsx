import { BlurredBackground } from "@/components/blurred-background";
import { HeroSection } from "@/components/sections/hero";
import { ConceptSection } from "@/components/sections/concept";
import { PositionSection } from "@/components/sections/position";
import { FunctionsSection } from "@/components/sections/functions";
import { FoundationSection } from "@/components/sections/foundation";
import { ChangesSection } from "@/components/sections/changes";
import { DirectionsSection } from "@/components/sections/directions";
import { AcademicIntegritySection } from "@/components/sections/academic-integrity";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background mờ - luân phiên 1.jpg, 2.jpg, 3.jpg (Đảng, cách mạng, Bác Hồ) */}
      <BlurredBackground />
      {/* Lớp phủ để chữ dễ đọc (hợp với theme sáng/tối) */}
      <div className="fixed inset-0 -z-10 bg-background/80" aria-hidden />

      <div className="relative z-0">
        <HeroSection />
        <ConceptSection />
        <PositionSection />
        <FunctionsSection />
        <FoundationSection />
        <ChangesSection />
        <DirectionsSection />
        <AcademicIntegritySection />
        <FooterSection />
      </div>
    </main>
  );
}
