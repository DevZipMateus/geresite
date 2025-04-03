
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormularioContato from '@/components/FormularioContato';
import BuscaSitesPorEmail from '@/components/BuscaSitesPorEmail';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Clock, AlertTriangle, Sparkles, Globe, Check } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
        <section id="criar-site" className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/40">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 animate-fade-in space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Crie uma prévia</span> do seu site profissional
                </h2>
                
                <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">Prévia temporária em segundos</span>
                </div>
                
                <div className="space-y-3 max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700">
                    MonteSite permite que você visualize uma <span className="font-medium text-blue-600">prévia temporária</span> do seu site institucional de forma rápida e prática.
                  </p>
                  
                  <ul className="text-gray-700 mx-auto max-w-md text-left space-y-2 pl-5">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Preencha um formulário simples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Receba instantaneamente uma <em>demonstração personalizada</em></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Veja seu conteúdo em um dos nossos modelos premium</span>
                    </li>
                  </ul>
                </div>
                
                <Alert variant="default" className="bg-amber-50 border border-amber-200 text-left max-w-xl mx-auto">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <AlertTitle className="text-amber-700 flex items-center gap-2 font-semibold">
                    <Clock className="h-4 w-4" /> Importante
                  </AlertTitle>
                  <AlertDescription className="text-gray-700">
                    A prévia ficará disponível por <span className="text-blue-700 font-medium">tempo limitado</span> para sua avaliação. Crie agora mesmo!
                  </AlertDescription>
                </Alert>
              </div>
              
              <Tabs defaultValue="novo" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="novo">Criar Novo Site</TabsTrigger>
                  <TabsTrigger value="buscar">Buscar Site Existente</TabsTrigger>
                </TabsList>
                
                <TabsContent value="novo">
                  <Card className="border-t-4 border-t-blue-600 shadow-lg animate-fade-in">
                    <CardContent className="pt-6">
                      <FormularioContato submitButtonText="Criar Minha Prévia Agora" showArrowIcon={true} />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="buscar">
                  <Card className="border-t-4 border-t-blue-600 shadow-lg animate-fade-in">
                    <CardContent className="pt-6">
                      <BuscaSitesPorEmail />
                    </CardContent>
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
