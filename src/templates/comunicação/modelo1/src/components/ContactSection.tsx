
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function ContactSection() {
  const handleContactClick = () => {
    openWhatsApp("Olá! Gostaria de entrar em contato com a Impulso Empreendedor para tirar algumas dúvidas.");
  };

  const handleQuestionClick = () => {
    openWhatsApp("Olá! Tenho algumas dúvidas sobre os workshops da Impulso Empreendedor. Podem me ajudar?");
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <Mail className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tire suas dúvidas, conheça nossos cursos ou agende uma visita. Estamos aqui para impulsionar seu negócio!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp Contact Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco no WhatsApp</h3>
            <div className="space-y-6">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <p className="text-white/80 mb-6">
                  A forma mais rápida de tirar suas dúvidas e se inscrever nos nossos workshops!
                </p>
              </div>
              
              <div className="space-y-4">
                <Button onClick={handleContactClick} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Entrar em Contato
                </Button>
                
                <Button onClick={handleQuestionClick} className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Tirar Dúvidas
                </Button>
              </div>

              <div className="text-center text-white/70 text-sm">
                <p>📱 Disponível de segunda a sábado</p>
                <p>⚡ Resposta rápida garantida</p>
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">Endereço</div>
                    <div className="text-white/70">Centro de Santa Maria, RS</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">Telefone</div>
                    <div className="text-white/70">(55) 9999-9999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-300" />
                  <div>
                    <div className="text-white font-medium">E-mail</div>
                    <div className="text-white/70">contato@impulsoempreendedor.com.br</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-cyan-300/30 text-cyan-300 hover:bg-cyan-300/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-cyan-300/30 text-cyan-300 hover:bg-cyan-300/10">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-white/70 mt-4">
                Siga-nos nas redes sociais para dicas diárias de empreendedorismo e novidades sobre nossos workshops!
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-white/70">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
