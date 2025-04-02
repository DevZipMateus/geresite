
import React, { useEffect, useState } from 'react';
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
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Monte seu Site Institucional
            </h1>
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
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="5599999999999" />
    </div>
  );
};

export default Index;
