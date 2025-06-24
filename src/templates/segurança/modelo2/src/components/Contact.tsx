
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section bg-transparent">
      <div className="container-custom py-12 sm:py-16 lg:py-20 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block bg-ds3-gold/20 text-ds3-dark font-medium px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4">
            Contato
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-base sm:text-lg text-zinc-950">
            Estamos prontos para atender suas necessidades de EPIs através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-emerald-500 p-4 sm:p-6 flex items-center justify-center">
              <img src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" alt="WhatsApp" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="p-4 sm:p-6 text-center bg-zinc-400">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base w-full sm:w-auto">
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            <div className="bg-ds3-gold p-4 sm:p-6 flex items-center justify-center">
              <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-ds3-dark" />
            </div>
            <div className="p-4 sm:p-6 text-center bg-zinc-400">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">Telefone</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">Fale diretamente conosco</p>
              <a href="tel:+5511987654321" className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base w-full sm:w-auto">
                <span>(11) 98765-4321</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in sm:col-span-2 lg:col-span-1" style={{
            animationDelay: '0.2s'
          }}>
            <div className="bg-ds3-dark p-4 sm:p-6 flex items-center justify-center">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-ds3-gold" />
            </div>
            <div className="p-4 sm:p-6 text-center bg-zinc-400">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">E-mail</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4">Envie sua mensagem</p>
              <a href="mailto:vendas@safeguardepis.com.br" className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-4 sm:px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-xs sm:text-sm w-full sm:w-auto break-all sm:break-normal">
                <span className="truncate sm:whitespace-normal">vendas@safeguardepis.com.br</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-8 sm:mt-12 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto bg-zinc-400">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Address */}
            <div>
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="bg-neutral-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="text-ds3-dark" size={20} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                  <p className="text-sm sm:text-base text-zinc-950 leading-relaxed">Rua da Segurança, 123 - Centro, São Paulo - SP, 01000-000</p>
                  <a href="https://www.google.com/maps/place/R.+da+Seguran%C3%A7a,+123+-+Centro,+S%C3%A3o+Paulo+-+SP,+01000-000,+Brasil/" target="_blank" rel="noopener noreferrer" className="text-ds3-dark hover:text-ds3-gold transition-colors duration-300 mt-2 inline-block text-sm sm:text-base">
                    Ver no mapa
                  </a>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="w-full h-48 sm:h-64 mt-4 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps?q=Centro+S%C3%A3o+Paulo+SP&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{
                    border: 0
                  }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Localização da Safeguard EPIs"
                ></iframe>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="mt-6 lg:mt-0">
              <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-3 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-zinc-950">Segunda - Sexta:</span>
                  <span className="font-medium text-neutral-900 text-sm sm:text-base">08:00 - 18:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-zinc-950">Sábado:</span>
                  <span className="font-medium text-neutral-900 text-sm sm:text-base">08:00 - 12:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-zinc-950">Domingo:</span>
                  <span className="font-medium text-neutral-900 text-sm sm:text-base">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
