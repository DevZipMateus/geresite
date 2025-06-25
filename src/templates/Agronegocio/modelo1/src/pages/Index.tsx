
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandsSection from '../components/BrandsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

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
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header cliente={cliente} logoUrl={logoUrl} />
      <HeroSection cliente={cliente} logoUrl={logoUrl} />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
