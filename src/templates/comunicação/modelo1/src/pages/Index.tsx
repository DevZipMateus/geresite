
import StaticBackground from "@/components/StaticBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ImpactSection from "@/components/ImpactSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Static Background */}
      <StaticBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <HeroSection />
      <CoursesSection />
      <ImpactSection />
      <AboutSection />
      <ContactSection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
