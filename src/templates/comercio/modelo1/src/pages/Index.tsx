
import React from 'react';
import { ShoppingBag, CreditCard, Truck, Users, Star, ArrowRight } from 'lucide-react';

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
  const nomeEmpresa = cliente?.nome_empresa || 'ComércioMax';
  const telefone = cliente?.telefone || '(11) 4444-5555';
  const email = cliente?.email || 'contato@comerciomax.com';

  // Função para redirecionar para WhatsApp
  const handleWhatsAppRedirect = (productName: string, price: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Tenho interesse no produto: ${productName} (${price}). Gostaria de mais informações sobre disponibilidade e formas de pagamento.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Gostaria de conhecer mais sobre os produtos da ${nomeEmpresa}.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <ShoppingBag className="h-8 w-8 text-blue-600" />
            )}
            <span className="text-2xl font-bold text-slate-900">{nomeEmpresa}</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-700 hover:text-blue-600">Produtos</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Ofertas</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Sobre</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Contato</a>
          </nav>
          <button 
            onClick={handleGeneralWhatsApp}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {nomeEmpresa} - Sua Loja Online <span className="text-yellow-300">Completa</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Soluções completas para e-commerce com atendimento especializado via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGeneralWhatsApp}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300"
            >
              Começar Agora
            </button>
            <button 
              onClick={handleGeneralWhatsApp}
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600"
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Por que escolher a <span className="text-blue-600">{nomeEmpresa}?</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: CreditCard, title: 'Atendimento Personalizado', desc: 'Vendas diretas via WhatsApp' },
              { icon: Truck, title: 'Entrega Rápida', desc: 'Consulte condições de frete' },
              { icon: Users, title: 'Atendimento 24/7', desc: 'Suporte especializado' },
              { icon: Star, title: 'Qualidade Garantida', desc: '100% satisfação do cliente' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Produtos em <span className="text-blue-600">Destaque</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, name: 'Produto Premium', price: 'R$ 299,90' },
              { id: 2, name: 'Produto Especial', price: 'R$ 199,90' },
              { id: 3, name: 'Produto Exclusivo', price: 'R$ 399,90' }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-slate-200 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">Descrição detalhada do produto com características principais</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button 
                      onClick={() => handleWhatsAppRedirect(product.name, product.price)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Comprar via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 p-4 bg-slate-800 rounded-lg">
              <span>📞 {telefone}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-slate-800 rounded-lg">
              <span>✉️ {email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <ShoppingBag className="h-8 w-8 text-blue-400" />
            )}
            <span className="text-2xl font-bold">{nomeEmpresa}</span>
          </div>
          <p className="text-slate-400 mb-6">Sua loja online de confiança</p>
          <p className="text-slate-500">&copy; 2024 {nomeEmpresa}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
