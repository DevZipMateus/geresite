
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingButton from '../components/FloatingButton';
import { Anchor, Shield, LifeBuoy, RefreshCw } from 'lucide-react';

const EnxovalOffshore = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      name: "Lençóis e Fronhas",
      description: "Lençóis e fronhas resistentes para uso intensivo em ambientes offshore e onshore.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Toalhas de Banho",
      description: "Toalhas de banho e rosto de alta absorção e durabilidade para plataformas.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Cobertores e Mantas",
      description: "Cobertores e mantas térmicas para uso em alojamentos e áreas de descanso.",
      image: "https://images.unsplash.com/photo-1544012607-957f6d544581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Toalhas de Mesa e Panos de Copa",
      description: "Produtos para áreas de alimentação, com tratamento antimicrobiano e alta durabilidade.",
      image: "https://images.unsplash.com/photo-1574359411659-15543e68a0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Resistência Superior",
      description: "Produtos desenvolvidos para suportar condições adversas e uso intensivo em ambientes offshore e onshore."
    },
    {
      icon: RefreshCw,
      title: "Alta Durabilidade",
      description: "Materiais selecionados para garantir maior vida útil mesmo com lavagens frequentes e uso intenso."
    },
    {
      icon: LifeBuoy,
      title: "Segurança e Conforto",
      description: "Produtos que atendem às normas de segurança e proporcionam conforto em ambientes de trabalho exigentes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ds3-dark to-ds3-dark/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <div className="inline-block bg-ds3-gold/20 text-ds3-gold font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                Enxoval Offshore e Onshore
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Soluções Têxteis para Ambientes Offshore
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Enxoval completo para plataformas marítimas e instalações onshore, com foco em 
                durabilidade, segurança e adequação às condições extremas de trabalho.
              </p>
              <a 
                href="https://wa.me/552221412489" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ds3-gold hover:bg-ds3-gold/90 text-ds3-dark px-6 py-3 rounded-md transition-all inline-flex items-center justify-center gap-2 font-medium"
              >
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossos Produtos para Ambientes Offshore
              </h2>
              <p className="text-gray-600 text-lg">
                Conheça nossa linha completa de enxovais desenvolvidos especialmente para 
                as necessidades específicas de plataformas marítimas e instalações terrestres.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-ds3-gold/30 transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-ds3-dark hover:text-ds3-gold font-medium transition-colors duration-300"
                    >
                      Mais informações
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-ds3-gold/10 text-ds3-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                Diferenciais
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher nossos produtos offshore?
              </h2>
              <p className="text-gray-600 text-lg">
                Nosso enxoval para ambientes offshore é desenvolvido pensando nas condições extremas 
                e necessidades específicas desses ambientes de trabalho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="bg-ds3-gold/10 p-4 rounded-lg inline-block mb-5">
                    <feature.icon className="text-ds3-dark" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block bg-ds3-gold/10 text-ds3-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                Aplicações
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Onde nossos produtos são utilizados
              </h2>
              <p className="text-gray-600 text-lg">
                Fornecemos soluções têxteis para diversos ambientes e aplicações no setor offshore e onshore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center">
                <div className="bg-ds3-gold/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Anchor className="text-ds3-dark" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plataformas Marítimas</h3>
                <p className="text-gray-600">Soluções completas para alojamentos e áreas de convivência em plataformas offshore.</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="bg-ds3-gold/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="text-ds3-dark" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Navios de Apoio</h3>
                <p className="text-gray-600">Produtos adequados para embarcações de suporte às operações offshore.</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="bg-ds3-gold/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <LifeBuoy className="text-ds3-dark" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instalações Terrestres</h3>
                <p className="text-gray-600">Enxoval para bases onshore, alojamentos e áreas administrativas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-ds3-gold/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precisando de soluções específicas para seu ambiente offshore?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Entre em contato para desenvolvermos produtos que atendam às necessidades específicas da sua operação.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://wa.me/552221412489" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ds3-dark hover:bg-ds3-dark/90 text-ds3-gold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <span>Solicitar Orçamento</span>
                </a>
                <a 
                  href="#contact" 
                  className="bg-white hover:bg-gray-50 text-ds3-dark border border-ds3-gold px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium"
                >
                  <span>Fale Conosco</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default EnxovalOffshore;
