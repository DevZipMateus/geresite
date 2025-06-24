
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Equipe altamente qualificada',
    'Atendimento personalizado',
    'Tecnologia de ponta',
    'Confidencialidade e segurança',
    'Suporte contínuo',
    'Atualizações fiscais constantes'
  ];

  return (
    <section id="sobre-nós" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a excelência em serviços contábeis
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Nossa Equipe" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-primary/10 text-primary rounded-full">
              Nossa História
            </span>
            <h3 className="text-3xl font-bold">Compromisso com a sua empresa</h3>
            <p className="text-gray-600">
              Fundada em 2005, nossa empresa de contabilidade tem se destacado pela excelência 
              em serviços contábeis, fiscais e empresariais. Ao longo de mais de 15 anos, 
              construímos uma sólida reputação baseada em confiança, transparência e resultados.
            </p>
            <p className="text-gray-600">
              Nossa equipe é formada por profissionais experientes e altamente qualificados, 
              sempre atualizados com as mais recentes mudanças na legislação e práticas contábeis.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
