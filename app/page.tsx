import HeroSection from "@/components/home/HeroSection";
import MotiveSection from "@/components/home/MotiveSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import SkillSection from "@/components/home/SkillSection";
import PerformersSection from "@/components/home/PerformersSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MotiveSection />
      <FeaturesSection />
      <StatsSection />
      <ResourcesSection />
      <SkillSection />
      <PerformersSection />
    </main>
  );
}