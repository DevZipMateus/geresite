
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalContact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20transformar%20minha%20casa%20com%20automação%20e%20segurança.', '_blank');
  };

  return (
    <section className="relative py-20 bg-green-500/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para <span className="text-green-400">transformar</span> sua casa?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos tornar sua casa mais inteligente e segura
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-slate-400 mb-4">Resposta rápida e atendimento personalizado</p>
              <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600">
                Conversar agora
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Telefone</h3>
              <p className="text-slate-400 mb-4">Atendimento direto com nossos especialistas</p>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                (21) 99999-9999
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-mail</h3>
              <p className="text-slate-400 mb-4">Envie sua dúvida ou solicite um orçamento</p>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                Enviar e-mail
              </Button>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Orçamento Gratuito</h3>
            <p className="text-slate-300 mb-6">
              Agende uma visita técnica gratuita e receba um orçamento personalizado sem compromisso
            </p>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              Agendar Visita Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalContact;
