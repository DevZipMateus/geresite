
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Map from '@/components/Map';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium">CONTATO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">Entre em Contato Conosco</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender às suas necessidades e responder a quaisquer perguntas que você possa ter.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeIn direction="left">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Envie-nos uma mensagem</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Seu e-mail" 
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Assunto da mensagem" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <Textarea 
                    id="message" 
                    placeholder="Sua mensagem" 
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">Enviar Mensagem</Button>
              </form>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Endereço</h4>
                    <p className="text-gray-600">R. do Acampamento, 380, Centro, Santa Maria - RS</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Telefone</h4>
                    <p className="text-gray-600">(55) 3222-0000</p>
                    <p className="text-gray-600">(55) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">E-mail</h4>
                    <p className="text-gray-600">contato@empresa.com</p>
                    <p className="text-gray-600">suporte@empresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Horário</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h - 18h</p>
                    <p className="text-gray-600">Sábado: 9h - 13h</p>
                  </div>
                </div>
              </div>
              
              <Map />
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
