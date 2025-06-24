
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedCollection from '../components/FeaturedCollection';
import Lookbook from '../components/Lookbook';
import AboutBrand from '../components/AboutBrand';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-urban-black">
      <Header cliente={cliente} logoUrl={logoUrl} />
      <HeroSection cliente={cliente} />
      <FeaturedCollection cliente={cliente} />
      <Lookbook />
      <AboutBrand cliente={cliente} />
      <Testimonials />
      <FinalCTA cliente={cliente} />
      <Footer cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default Index;
