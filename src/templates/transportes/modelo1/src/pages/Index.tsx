
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
  const nomeEmpresa = cliente?.nome_empresa || 'Transportes';
  const telefone = cliente?.telefone || '5511999999999';

  const handleWhatsAppClick = (message: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {logoUrl ? (
                <img src={logoUrl} alt={nomeEmpresa} className="h-10 w-10 object-contain" />
              ) : (
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{nomeEmpresa.charAt(0)}</span>
                </div>
              )}
              <h1 className="text-2xl font-bold text-gray-900">{nomeEmpresa}</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Seção Início */}
      <section id="inicio" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Bem-vindo à {nomeEmpresa}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Soluções completas em transporte com segurança, pontualidade e qualidade.
          </p>
          <button 
            onClick={() => handleWhatsAppClick(`Olá! Gostaria de solicitar um orçamento de transporte com a ${nomeEmpresa}.`)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Orçamento via WhatsApp
          </button>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nome: "Transporte de Cargas", descricao: "Movimentação segura de mercadorias", icone: "🚛" },
              { nome: "Mudanças", descricao: "Serviços completos de mudança residencial e comercial", icone: "📦" },
              { nome: "Entrega Expressa", descricao: "Entregas rápidas e seguras", icone: "⚡" }
            ].map((servico, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">{servico.icone}</div>
                <h3 className="text-xl font-semibold mb-2">{servico.nome}</h3>
                <p className="text-gray-700 mb-4">{servico.descricao}</p>
                <button 
                  onClick={() => handleWhatsAppClick(`Olá! Gostaria de solicitar o serviço: ${servico.nome}.`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Sobre a {nomeEmpresa}</h2>
            <p className="text-lg text-gray-700 mb-6">
              Somos uma empresa especializada em soluções de transporte, 
              oferecendo serviços seguros e confiáveis há anos no mercado.
            </p>
            <p className="text-lg text-gray-700">
              Nossa frota moderna e equipe qualificada garantem que sua carga 
              chegue ao destino com total segurança e pontualidade.
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
              Solicite seu orçamento ou tire suas dúvidas conosco!
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Telefone:</strong> {telefone}
              </p>
              <p className="text-lg">
                <strong>Email:</strong> {cliente?.email || 'contato@transportes.com'}
              </p>
              <button 
                onClick={() => handleWhatsAppClick(`Olá! Gostaria de entrar em contato com a ${nomeEmpresa}.`)}
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
