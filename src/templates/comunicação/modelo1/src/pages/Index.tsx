
import StaticBackground from "../components/StaticBackground";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import ImpactSection from "../components/ImpactSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";

interface IndexProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
  logoUrl?: string | null;
}

const Index: React.FC<IndexProps> = ({ cliente, logoUrl }) => {
  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Static Background */}
      <StaticBackground />

      {/* Navigation */}
      <Navigation cliente={cliente} logoUrl={logoUrl} />

      {/* Main Content */}
      <HeroSection cliente={cliente} />
      <CoursesSection />
      <ImpactSection />
      <AboutSection />
      <ContactSection cliente={cliente} />

      {/* WhatsApp Button */}
      <WhatsAppButton cliente={cliente} />
    </div>
  );
};

export default Index;
