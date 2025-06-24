
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-3 right-3' : 'bottom-6 right-6 lg:bottom-8 lg:right-8'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-2 sm:mb-3 space-y-reverse space-y-1 sm:space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5511987654321" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-ds3-dark text-ds3-gold px-3 sm:px-4 py-2 rounded-md shadow-lg hover:bg-ds3-dark/90 transition-all duration-300 gap-2 font-medium text-xs sm:text-sm"
        >
          <span className="mr-1">WhatsApp</span>
        </a>
        
        <a 
          href="tel:+5511987654321" 
          className="flex items-center bg-ds3-dark text-ds3-gold px-3 sm:px-4 py-2 rounded-md shadow-lg hover:bg-ds3-dark/90 transition-all duration-300 gap-2 font-medium text-xs sm:text-sm"
        >
          <span className="mr-1">Ligar</span>
        </a>
        
        <a 
          href="mailto:vendas@safeguardepis.com.br" 
          className="flex items-center bg-ds3-dark text-ds3-gold px-3 sm:px-4 py-2 rounded-md shadow-lg hover:bg-ds3-dark/90 transition-all duration-300 gap-2 font-medium text-xs sm:text-sm"
        >
          <span className="mr-1">E-mail</span>
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'p-3' : 'p-3 sm:p-4'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-ds3-gold hover:bg-ds3-gold/90'} 
          ${isOpen ? 'text-white' : 'text-ds3-dark'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 4px 12px rgba(239, 68, 68, 0.4)' 
            : '0 4px 12px rgba(242, 205, 105, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 16 : 20} />
        ) : (
          <div className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5 sm:w-6 sm:h-6'}`}>
            <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
