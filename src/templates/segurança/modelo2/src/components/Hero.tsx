
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center pt-16 sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/66ded53a-d6e4-4b83-b0cf-f477bffcd5cd.png" 
          alt="Trabalhador offshore com vista para plataforma petrolífera" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-ds3-dark/70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-header mb-6 sm:mb-8 animate-fade-in leading-tight">
            Excelência em Proteção
          </h1>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            <Link to="/linha-profissional" className="bg-ds3-gold hover:bg-ds3-gold/90 text-ds3-dark px-6 sm:px-8 py-3 rounded font-medium text-base sm:text-lg transition-all text-shadow-sm text-center">
              VER SOLUÇÕES
            </Link>
            
            <Link to="#about" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded font-medium text-base sm:text-lg transition-all text-shadow text-center">
              SOBRE A DS3
            </Link>
          </div>

          {/* Service Categories */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <Link to="/enxoval-offshore" className="flex items-center bg-black/30 backdrop-blur-sm hover:bg-black/40 p-3 sm:p-4 rounded-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-ds3-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/lovable-uploads/87e15858-fe61-4896-852e-32125d20e4af.png" alt="Offshore" className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
              </div>
              <span className="text-white font-medium group-hover:text-ds3-gold transition-colors text-shadow text-sm sm:text-base">Enxovais Offshore & Onshore</span>
            </Link>
            
            <Link to="/enxoval-hospitalar" className="flex items-center bg-black/30 backdrop-blur-sm hover:bg-black/40 p-3 sm:p-4 rounded-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-ds3-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/lovable-uploads/87e15858-fe61-4896-852e-32125d20e4af.png" alt="Hospital" className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
              </div>
              <span className="text-white font-medium group-hover:text-ds3-gold transition-colors text-shadow text-sm sm:text-base">Enxovais Hospitalares</span>
            </Link>
            
            <Link to="/linha-profissional" className="flex items-center bg-black/30 backdrop-blur-sm hover:bg-black/40 p-3 sm:p-4 rounded-lg transition-all group md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 bg-ds3-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/lovable-uploads/87e15858-fe61-4896-852e-32125d20e4af.png" alt="Professional" className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
              </div>
              <span className="text-white font-medium group-hover:text-ds3-gold transition-colors text-shadow text-sm sm:text-base">Linha Profissional</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
