
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Cliente } from '@/types/database.types';

interface ContactSectionProps {
  cliente: Cliente;
}

const ContactSection: React.FC<ContactSectionProps> = ({ cliente }) => {
  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Estamos prontos para atender você. Entre em contato conosco para saber mais sobre nossos serviços.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2 bg-primary/10 p-4 rounded-lg">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-gray-700">{cliente.telefone}</span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 p-4 rounded-lg">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-gray-700">{cliente.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
