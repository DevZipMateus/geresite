
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormularioContato from '@/components/FormularioContato';
import BuscaSitesPorEmail from '@/components/BuscaSitesPorEmail';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="pt-24 pb-12 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Monte seu Site Institucional
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Crie rapidamente um site profissional para sua empresa, sem complicações.
              </p>
              <a 
                href="#criar-site" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Comece Agora
              </a>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section id="criar-site" className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Monte seu Site Institucional
              </h2>
              <p className="text-lg text-center text-gray-600 mb-12">
                Crie rapidamente um site profissional para sua empresa. Preencha o formulário abaixo ou busque um site existente.
              </p>
              
              <Tabs defaultValue="novo" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="novo">Criar Novo Site</TabsTrigger>
                  <TabsTrigger value="buscar">Buscar Site Existente</TabsTrigger>
                </TabsList>
                
                <TabsContent value="novo">
                  <Card>
                    <FormularioContato />
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
      <WhatsAppButton phoneNumber="5599999999999" />
    </div>
  );
};

export default Index;
