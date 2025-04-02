
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AboutUs = () => {
  const achievements = [
    { number: '10+', text: 'Anos de Experiência' },
    { number: '500+', text: 'Clientes Satisfeitos' },
    { number: '50+', text: 'Especialistas' },
    { number: '100%', text: 'Compromisso' }
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-xl"></div>
                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="space-y-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="Equipe em reunião" 
                      className="rounded-lg shadow-lg h-64 w-full object-cover"
                    />
                    <img 
                      src="/placeholder.svg" 
                      alt="Escritório moderno" 
                      className="rounded-lg shadow-lg h-40 w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      src="/placeholder.svg" 
                      alt="Profissionais trabalhando" 
                      className="rounded-lg shadow-lg h-40 w-full object-cover"
                    />
                    <img 
                      src="/placeholder.svg" 
                      alt="Discussão de projetos" 
                      className="rounded-lg shadow-lg h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <span className="text-primary font-medium">SOBRE NÓS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
                Uma Empresa Comprometida com o Sucesso dos Clientes
              </h2>
              <p className="text-gray-600 mb-6">
                Há mais de uma década, temos sido parceiros de confiança para empresas de todos os portes. Nossa missão é fornecer soluções empresariais inovadoras e eficazes que atendam às necessidades específicas de cada cliente.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Equipe altamente qualificada', 'Atendimento personalizado', 'Soluções inovadoras', 'Compromisso com resultados'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-1">{achievement.number}</h3>
                    <p className="text-sm text-gray-600">{achievement.text}</p>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="rounded-full" asChild>
                <a href="#contact">Entre em Contato</a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
