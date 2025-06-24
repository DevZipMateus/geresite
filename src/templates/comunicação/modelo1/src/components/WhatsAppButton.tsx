
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ cliente }) => {
  const telefone = cliente?.telefone || '5511999999999';
  const nomeEmpresa = cliente?.nome_empresa || 'Escola de Comunicação';
  
  // Clean phone number for WhatsApp URL
  const cleanPhone = telefone.replace(/\D/g, '');
  const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
  
  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse nos cursos da ${nomeEmpresa}. Gostaria de mais informações.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
