
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
  const nomeEmpresa = cliente?.nome_empresa || 'Sua Empresa';
  const telefone = cliente?.telefone || '5511999999999';

  const handleWhatsAppClick = (message: string) => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const produtos = [
    { nome: "Produto Premium", preco: "R$ 299", descricao: "Nosso produto mais refinado com qualidade superior", imagem: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400" },
    { nome: "Produto Especial", preco: "R$ 199", descricao: "Perfeito equilíbrio entre qualidade e preço", imagem: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
    { nome: "Produto Popular", preco: "R$ 99", descricao: "O favorito dos nossos clientes", imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { nome: "Produto Exclusivo", preco: "R$ 399", descricao: "Edição limitada com design único", imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
    { nome: "Produto Clássico", preco: "R$ 149", descricao: "Tradicional e confiável", imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { nome: "Produto Inovador", preco: "R$ 249", descricao: "Tecnologia de ponta em suas mãos", imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {logoUrl ? (
                <img src={logoUrl} alt={nomeEmpresa} className="h-16 w-16 object-contain" />
              ) : (
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{nomeEmpresa.charAt(0)}</span>
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{nomeEmpresa}</h1>
                <p className="text-sm text-gray-600">Qualidade e tradição desde sempre</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Produtos</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Seção Início */}
      <section id="inicio" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Bem-vindo à {nomeEmpresa}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Há anos no mercado, oferecemos produtos de alta qualidade com o melhor atendimento. 
            Nossa paixão é proporcionar experiências únicas aos nossos clientes, sempre com preços justos e produtos selecionados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppClick(`Olá! Gostaria de conhecer os produtos da ${nomeEmpresa}.`)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Fale Conosco no WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Produtos
            </button>
          </div>
        </div>
      </section>

      {/* Seção Produtos */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nossos Produtos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção cuidadosamente escolhida de produtos que combinam qualidade, 
              design e funcionalidade para atender às suas necessidades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
                  <p className="text-gray-600 mb-3">{produto.descricao}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{produto.preco}</p>
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá! Tenho interesse no ${produto.nome} (${produto.preco}). Gostaria de mais informações.`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium"
                  >
                    Comprar via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Diferenciais */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Por que nos escolher?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Todos os nossos produtos passam por rigoroso controle de qualidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">Nossa equipe está sempre pronta para ajudar você</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Enviamos seus produtos com rapidez e segurança</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre a {nomeEmpresa}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Somos uma empresa comprometida em oferecer produtos de alta qualidade e 
                  atendimento excepcional aos nossos clientes. Com anos de experiência no mercado, 
                  construímos nossa reputação baseada na confiança e satisfação de quem escolhe nossos produtos.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Nossa missão é proporcionar a melhor experiência de compra, oferecendo produtos 
                  cuidadosamente selecionados e um atendimento personalizado que supera as expectativas.
                </p>
                <p className="text-lg text-gray-700">
                  Acreditamos que cada cliente é único e merece produtos que reflitam sua personalidade 
                  e necessidades. Por isso, trabalhamos constantemente para ampliar nosso catálogo e 
                  melhorar nossos serviços.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500" 
                  alt="Nossa equipe" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Entre em Contato</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                <p className="text-lg text-gray-700 mb-8">
                  Estamos aqui para ajudar você! Entre em contato conosco através dos canais abaixo 
                  ou envie uma mensagem pelo WhatsApp para um atendimento mais rápido.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-600">{telefone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✉</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">{cliente?.email || 'contato@empresa.com'}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">⏰</span>
                    </div>
                    <div>
                      <p className="font-semibold">Horário de Atendimento</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá! Gostaria de entrar em contato com a ${nomeEmpresa} para saber mais sobre os produtos.`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <span className="mr-2">📱</span>
                    Conversar no WhatsApp
                  </button>
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá! Gostaria de solicitar um orçamento para os produtos da ${nomeEmpresa}.`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Solicitar Orçamento
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    Responderemos sua mensagem o mais rápido possível!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {logoUrl ? (
                  <img src={logoUrl} alt={nomeEmpresa} className="h-10 w-10 object-contain" />
                ) : (
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{nomeEmpresa.charAt(0)}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold">{nomeEmpresa}</h3>
              </div>
              <p className="text-gray-400">
                Oferecendo produtos de qualidade com atendimento personalizado.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 {telefone}</li>
                <li>✉ {cliente?.email || 'contato@empresa.com'}</li>
                <li>⏰ Seg-Sex: 8h às 18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 {nomeEmpresa}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
