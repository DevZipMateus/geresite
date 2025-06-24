
import React from 'react';
import { Shield, HardHat, Eye, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Proteção da Cabeça',
    description: 'Capacetes de segurança, toucas e protetores auriculares para proteção completa da cabeça em ambientes industriais.',
    icon: HardHat,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Proteção Visual e Respiratória',
    description: 'Óculos de proteção, máscaras, respiradores e filtros para ambientes com riscos químicos e particulados.',
    icon: Eye,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Proteção Corporal Completa',
    description: 'Luvas, calçados de segurança, cintos de segurança e vestimentas para proteção integral do trabalhador.',
    icon: Shield,
    delay: '0.2s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-transparent">
      <div className="container-custom py-12 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-ds3-gold/10 text-ds3-dark font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 text-shadow-sm">
            Nossos Produtos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-shadow-md">
            EPIs completos para sua segurança
          </h2>
          <p className="text-base sm:text-lg text-shadow text-gray-950">
            Oferecemos equipamentos de proteção individual certificados para atender às necessidades específicas 
            do seu ambiente de trabalho, com qualidade e segurança garantidas.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {services.map(service => (
            <div 
              key={service.id} 
              style={{
                animationDelay: service.delay
              }} 
              className="backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-ds3-gold/30 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in bg-zinc-300"
            >
              <div className="bg-ds3-gold/10 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-5">
                <service.icon className="text-ds3-dark" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 text-shadow-sm">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 text-shadow-sm leading-relaxed">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-ds3-dark hover:text-ds3-gold font-medium transition-colors duration-300 text-shadow-sm text-sm sm:text-base">
                Solicitar orçamento <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <a href="#contact" className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex text-shadow-sm text-sm sm:text-base">
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
