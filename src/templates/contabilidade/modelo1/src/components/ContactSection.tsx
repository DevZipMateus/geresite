
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <p className="text-sm text-gray-600">(11) 5555-5555</p>
                    <p className="text-sm text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <p className="text-sm text-gray-600 break-words">contato@contabilify.com.br</p>
                    <p className="text-sm text-gray-600 break-words">atendimento@contabilify.com.br</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-sm text-gray-600">São Paulo - SP, 01310-000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-600 text-sm">Sábados: 9h às 13h</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
