
export const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = "5555999999999"; // Número no formato internacional
  const defaultMessage = "Olá! Gostaria de saber mais sobre os workshops da Impulso Empreendedor.";
  const message = customMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
