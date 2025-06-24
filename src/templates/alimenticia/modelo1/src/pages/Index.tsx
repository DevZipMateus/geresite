
import React from 'react';

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
  const nomeEmpresa = cliente?.nome_empresa || 'Restaurante';
  const telefone = cliente?.telefone || '5511999999999';

  const handleWhatsAppClick = (message: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {logoUrl ? (
                <img src={logoUrl} alt={nomeEmpresa} className="h-10 w-10 object-contain" />
              ) : (
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{nomeEmpresa.charAt(0)}</span>
                </div>
              )}
              <h1 className="text-2xl font-bold text-gray-900">{nomeEmpresa}</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">Início</a>
              <a href="#cardapio" className="text-gray-700 hover:text-amber-600 transition-colors">Cardápio</a>
              <a href="#sobre" className="text-gray-700 hover:text-amber-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-amber-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Seção Início */}
      <section id="inicio" className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Bem-vindo ao {nomeEmpresa}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sabores únicos e experiências gastronômicas inesquecíveis esperam por você.
          </p>
          <button 
            onClick={() => handleWhatsAppClick(`Olá! Gostaria de fazer um pedido no ${nomeEmpresa}.`)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Fazer Pedido via WhatsApp
          </button>
        </div>
      </section>

      {/* Seção Cardápio */}
      <section id="cardapio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nosso Cardápio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nome: "Prato Especial", preco: "R$ 29,90", imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
              { nome: "Delícia da Casa", preco: "R$ 24,90", imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400" },
              { nome: "Sabor Tradicional", preco: "R$ 19,90", imagem: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400" }
            ].map((prato, index) => (
              <div key={index} className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                <img src={prato.imagem} alt={prato.nome} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{prato.nome}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-4">{prato.preco}</p>
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá! Gostaria de pedir o ${prato.nome} (${prato.preco}). Qual o endereço para entrega?`)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Pedir via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Sobre o {nomeEmpresa}</h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos apaixonados por culinária e dedicados a proporcionar experiências 
              gastronômicas excepcionais aos nossos clientes.
            </p>
            <p className="text-lg text-gray-700">
              Com ingredientes frescos e receitas tradicionais, criamos pratos que 
              tocam o coração e despertam os sentidos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Faça seu pedido ou tire suas dúvidas conosco!
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Telefone:</strong> {telefone}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {cliente?.email || 'contato@restaurante.com'}
              </p>
              <button 
                onClick={() => handleWhatsAppClick(`Olá! Gostaria de entrar em contato com o ${nomeEmpresa}.`)}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Conversar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
