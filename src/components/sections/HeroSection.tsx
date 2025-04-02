
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  scrollToTemplates: (e: React.MouseEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToTemplates
}) => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Curve at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10 px-8 md:px-12 text-center">
        <h1 
          className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6`}
        >
          Soluções inteligentes que transformam seu negócio
        </h1>
        
        <p 
          className="text-lg text-yellow-300 mb-10 max-w-3xl mx-auto"
        >
          Entre em contato conosco e solicite um orçamento para começar a usar hoje mesmo nossos serviços personalizados.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 flex items-center gap-2 font-medium"
            onClick={scrollToTemplates}
          >
            <Phone className="h-5 w-5" />
            Solicitar Orçamento
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-md border-secondary text-secondary-foreground hover:bg-secondary/20 hover:text-secondary-foreground"
            onClick={scrollToTemplates}
          >
            Nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
