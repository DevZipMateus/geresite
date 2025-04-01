
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  // Remove caracteres não numéricos do número de telefone
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${formattedPhoneNumber}`, '_blank');
  };
  
  return (
    <button 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl z-50 pulse-animation"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative w-10 h-10">
        <img 
          src="/lovable-uploads/b697cda5-7cc0-45bf-a5d5-cef2b56a27f4.png" 
          alt="WhatsApp" 
          className="w-full h-full object-contain"
        />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(72, 187, 120, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
          }
        }
      `}} />
    </button>
  );
};

export default WhatsAppButton;
