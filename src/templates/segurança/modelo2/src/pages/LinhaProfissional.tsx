
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingButton from '../components/FloatingButton';
import { Shirt, Shield, Tag, CheckCircle } from 'lucide-react';

const LinhaProfissional = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      name: "Macacões",
      description: "Macacões profissionais para ambientes industriais, com opções em diferentes tecidos e cores.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Jalecos",
      description: "Jalecos profissionais para laboratórios e áreas médicas, com personalização e diferentes modelos.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Camisas e Polos",
      description: "Camisas e blusas polo masculinas e femininas, ideais para uniformes empresariais e corporativos.",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Uniformes NR10 Risco 2",
      description: "Uniformes de proteção especializados, em conformidade com a norma NR10 Risco 2 para segurança elétrica.",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Proteção e Segurança",
      description: "Uniformes desenvolvidos com foco na segurança do trabalhador, seguindo todas as normas regulamentadoras."
    },
    {
      icon: Tag,
      title: "Personalização Completa",
      description: "Opções de personalização com silk ou bordado, adaptando o uniforme à identidade visual da sua empresa."
    },
    {
      icon: CheckCircle,
      title: "Qualidade Superior",
      description: "Tecidos de alta durabilidade e conforto, garantindo maior vida útil e satisfação aos usuários."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ds3-dark to-ds3-dark/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <div className="inline-block bg-ds3-gold/20 text-ds3-gold font-medium px-4 py-1.5 rounded-full text-sm mb-4">
                Linha Profissional
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Uniformes Profissionais Personalizados
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Oferecemos uniformes de alta qualidade para diversos segmentos, 
                com opções de personalização e conformidade com as normas de segurança.
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
                Nossa Linha de Produtos
              </h2>
              <p className="text-gray-600 text-lg">
                Explore nossa variedade de uniformes profissionais, desenvolvidos com foco 
                em conforto, durabilidade e adequação às normas técnicas.
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
                Por que escolher nossos uniformes?
              </h2>
              <p className="text-gray-600 text-lg">
                Nossos uniformes são desenvolvidos pensando na segurança, conforto e identidade visual da sua empresa.
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

        {/* CTA Section */}
        <section className="py-16 bg-ds3-gold/10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pronto para vestir sua equipe com qualidade e segurança?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Entre em contato conosco para solicitar um orçamento personalizado para sua empresa.
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

export default LinhaProfissional;
