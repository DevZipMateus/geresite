
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

  const stats = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '500+', label: 'Clientes Satisfeitos' },
    { value: '50+', label: 'Especialistas' }
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
                  src="public/lovable-uploads/2683821f-caff-4681-a157-21ded44b2411.png" 
                  alt="Profissionais trabalhando" 
                  className="w-full h-auto rounded-xl object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1936&q=80";
                  }}
                />
                
                {/* Stats card overlay */}
                <Card className="absolute bottom-4 right-4 shadow-lg w-3/4 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span>Desde 2010</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                        <span>+500 clientes</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900">13</h3>
                    <p className="text-sm text-gray-600">Anos de experiência em contabilidade</p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
          
          {/* Right column - Content */}
          <div className="lg:w-1/2">
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
              
              <Button className="rounded-md group" asChild>
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
