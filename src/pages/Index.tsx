
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormularioContato from '@/components/FormularioContato';
import BuscaSitesPorEmail from '@/components/BuscaSitesPorEmail';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="pt-24 pb-12 md:py-[12px]">
          
        </section>
        
        {/* Form Section */}
        <section id="criar-site" className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-blue-600">Crie uma prévia</span> do seu site profissional
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  MonteSite permite que você visualize uma <span className="text-blue-600">prévia temporária</span> do seu site institucional de forma rápida e prática.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Basta preencher um formulário simples e você receberá instantaneamente uma <em>demonstração personalizada</em> com seu conteúdo em um dos nossos modelos premium.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 inline-flex items-center gap-2 mb-6">
                  <span className="text-yellow-600 font-medium">⏱ Importante:</span>
                  <span className="text-gray-700">A prévia ficará disponível por <span className="text-blue-600 font-medium">tempo limitado</span> para sua avaliação.</span>
                </div>
              </div>
              
              <Tabs defaultValue="novo" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="novo">Criar Novo Site</TabsTrigger>
                  <TabsTrigger value="buscar">Buscar Site Existente</TabsTrigger>
                </TabsList>
                
                <TabsContent value="novo">
                  <Card>
                    <FormularioContato />
                    <div className="flex justify-center mt-6 mb-2">
                      <a 
                        href="#criar-site" 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <span>Criar Minha Prévia Agora</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="buscar">
                  <Card>
                    <BuscaSitesPorEmail />
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;
