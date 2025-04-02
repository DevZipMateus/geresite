
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const features = [
    { 
      title: 'Equipe Qualificada',
      description: 'Profissionais especializados e em constante atualização'
    },
    { 
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individualizada para suas necessidades'
    },
    { 
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais modernas ferramentas do mercado'
    }
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left column - Image with stats card overlay */}
          <div className="lg:w-1/2 relative">
            <FadeIn direction="left">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/cf704a85-d1eb-4953-a197-b1451e0c25d9.png" 
                  alt="Profissionais trabalhando" 
                  className="w-full h-[500px] object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1936&q=80";
                  }}
                />
                
                {/* Stats card overlay */}
                <Card className="absolute -bottom-6 -right-6 shadow-lg w-64 md:w-72 bg-white">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-black"></div>
                        <span>Desde 2010</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <span>+500 clientes</span>
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-4xl font-bold text-gray-900">13</p>
                        <p className="text-sm text-gray-500">Anos de experiência em contabilidade</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
          
          {/* Right column - Content */}
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <FadeIn direction="right">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre Nós</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
                Excelência em serviços contábeis para o seu negócio
              </h2>
              
              <div className="space-y-4 mb-8 text-gray-600">
                <p>
                  Desde 2010, nosso escritório se dedica ao auxílio administrativo de empresas de diversos portes e segmentos, utilizando técnicas contábeis e administrativas modernas para oferecer o melhor serviço aos nossos clientes.
                </p>
                <p>
                  Nossa equipe técnica está em constante capacitação para oferecer soluções inovadoras na área contábil, garantindo tranquilidade e segurança para que você possa focar no crescimento do seu negócio.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="rounded-md group bg-black text-white hover:bg-black/90" asChild>
                <a href="#services">
                  Conheça Nossos Diferenciais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
