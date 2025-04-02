
import React from 'react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecfb 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden py-0">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <FadeIn direction="left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Seu Negócio, Nossa Experiência
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Soluções Empresariais que Transformam seu Negócio
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Oferecemos serviços profissionais personalizados para ajudar sua empresa a atingir todo seu potencial no mercado.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="rounded-full btn-hover-effect text-lg bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary transition-all duration-300 px-8 py-6" asChild>
                  <a href="#contact">Fale Conosco</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg" asChild>
                  <a href="#services">Nossos Serviços</a>
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <div className="flex-1 mt-4 md:mt-0">
            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-indigo-300/20 to-primary/10 rounded-xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border border-white shadow-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Negócios em crescimento" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
