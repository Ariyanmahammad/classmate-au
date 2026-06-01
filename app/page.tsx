import HeroSection from "@/components/home/HeroSection";
import MotiveSection from "@/components/home/MotiveSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import SkillSection from "@/components/home/SkillSection";
import PerformersSection from "@/components/home/PerformersSection";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/shared/Footer";

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
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}