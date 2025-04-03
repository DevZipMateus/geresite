
import React from 'react';
import { Cliente } from '@/types/database.types';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/sections/HeroSection';
import Testimonials from '@/components/sections/Testimonials';
import AboutUs from '@/components/sections/AboutUs';
import ServicesSection from '@/components/institutional/ServicesSection';
import LocationSection from '@/components/institutional/LocationSection';
import InstitutionalFooter from '@/components/institutional/InstitutionalFooter';

interface MainContentProps {
  cliente: Cliente;
  logoUrl: string | null;
  handleSectionClick: (e: React.MouseEvent, sectionId: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  cliente,
  logoUrl,
  handleSectionClick
}) => {
  return (
    <>
      <WhatsAppButton phoneNumber={cliente.telefone} />

      <HeroSection scrollToTemplates={handleSectionClick} />

      <ServicesSection />

      <section id="about" className="py-16 bg-gray-50">
        <AboutUs />
      </section>

      <section id="depoimentos" className="py-16 bg-gray-50">
        <Testimonials />
      </section>

      <LocationSection />

      <InstitutionalFooter cliente={cliente} logoUrl={logoUrl} />
    </>
  );
};

export default MainContent;
