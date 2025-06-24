
import React from 'react';
import { UtensilsCrossed, Clock, Star, MapPin, Phone, ChefHat } from 'lucide-react';

interface IndexProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
  logoUrl?: string | null;
}

const Index: React.FC<IndexProps> = ({ cliente, logoUrl }) => {
  const nomeEmpresa = cliente?.nome_empresa || 'SaborTotal';
  const telefone = cliente?.telefone || '(11) 3333-4444';
  const email = cliente?.email || 'contato@sabortotal.com';

  // Função para redirecionar para WhatsApp
  const handleWhatsAppOrder = (dishName: string, price: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Gostaria de pedir: ${dishName} (${price}). Pode me informar sobre disponibilidade e entrega?`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleGeneralWhatsApp = (action: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    let message = '';
    
    if (action === 'menu') {
      message = `Olá! Gostaria de ver o cardápio completo do ${nomeEmpresa}.`;
    } else if (action === 'reservation') {
      message = `Olá! Gostaria de reservar uma mesa no ${nomeEmpresa}.`;
    } else {
      message = `Olá! Gostaria de fazer um pedido no ${nomeEmpresa}.`;
    }
    
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <ChefHat className="h-8 w-8" />
            )}
            <span className="text-2xl font-bold">{nomeEmpresa}</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-200">Cardápio</a>
            <a href="#" className="hover:text-orange-200">Sobre</a>
            <a href="#" className="hover:text-orange-200">Delivery</a>
            <a href="#" className="hover:text-orange-200">Contato</a>
          </nav>
          <button 
            onClick={() => handleGeneralWhatsApp('order')}
            className="bg-yellow-400 text-orange-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300"
          >
            Fazer Pedido
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {nomeEmpresa} - Sabores que <span className="text-yellow-300">Conquistam</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pratos preparados com amor, ingredientes frescos e atendimento personalizado via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleGeneralWhatsApp('menu')}
              className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300"
            >
              Ver Cardápio
            </button>
            <button 
              onClick={() => handleGeneralWhatsApp('reservation')}
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600"
            >
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Nossos <span className="text-orange-600">Destaques</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Feijoada Completa', price: 'R$ 45,90', emoji: '🍲' },
              { name: 'Picanha na Brasa', price: 'R$ 65,90', emoji: '🥩' },
              { name: 'Moqueca de Peixe', price: 'R$ 55,90', emoji: '🐟' }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-6xl">{dish.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-slate-600 mb-4">Prato tradicional preparado com ingredientes selecionados</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                    <button 
                      onClick={() => handleWhatsAppOrder(dish.name, dish.price)}
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                    >
                      Pedir via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Delivery Rápido', desc: 'Entrega em até 45 minutos' },
              { icon: UtensilsCrossed, title: 'Pratos Caseiros', desc: 'Feito como em casa' },
              { icon: Star, title: 'Qualidade Premium', desc: 'Ingredientes selecionados' },
              { icon: Phone, title: 'Atendimento', desc: 'Pedidos via WhatsApp' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {logoUrl ? (
                  <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
                ) : (
                  <ChefHat className="h-8 w-8 text-orange-400" />
                )}
                <span className="text-2xl font-bold">{nomeEmpresa}</span>
              </div>
              <p className="text-slate-400">Restaurante tradicional com sabores únicos</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{telefone}</span>
                </div>
                <div className="flex items-center">
                  <span>✉️</span>
                  <span className="ml-2">{email}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <div className="text-slate-400">
                <p>Segunda à Domingo</p>
                <p>11h às 23h</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
