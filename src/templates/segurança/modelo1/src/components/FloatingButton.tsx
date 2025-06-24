
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20segurança.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default FloatingButton;
