
import React from 'react';
import { Truck, MapPin, Clock, Shield, Phone, Mail, Users, Star } from 'lucide-react';

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
  const nomeEmpresa = cliente?.nome_empresa || 'TransExpress';
  const telefone = cliente?.telefone || '(11) 4444-5555';
  const email = cliente?.email || 'contato@transexpress.com';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <Truck className="h-8 w-8" />
            )}
            <span className="text-2xl font-bold">{nomeEmpresa}</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-green-200">Serviços</a>
            <a href="#" className="hover:text-green-200">Rastreamento</a>
            <a href="#" className="hover:text-green-200">Sobre</a>
            <a href="#" className="hover:text-green-200">Contato</a>
          </nav>
          <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300">
            Cotação
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {nomeEmpresa} - Transporte <span className="text-yellow-300">Seguro</span> e Eficiente
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Conectamos destinos com confiança, oferecendo soluções completas em logística e transporte para pessoas e cargas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300">
              Solicitar Transporte
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-700">
              Rastrear Pedido
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Nossos <span className="text-green-600">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Transporte de Carga', desc: 'Logística completa para empresas' },
              { icon: Users, title: 'Transporte Executivo', desc: 'Conforto e pontualidade' },
              { icon: MapPin, title: 'Entregas Expressas', desc: 'Rapidez em todo território nacional' },
              { icon: Shield, title: 'Segurança Total', desc: 'Cargas protegidas e rastreadas' }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Pontualidade', desc: '98% de entregas no prazo' },
              { icon: Star, title: 'Qualidade', desc: 'Excelência reconhecida' },
              { icon: Shield, title: 'Segurança', desc: 'Frota monitorada 24h' }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                <feature.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Precisa de <span className="text-green-400">Transporte?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 p-4 bg-slate-800 rounded-lg">
              <Phone className="h-5 w-5 text-green-400" />
              <span>{telefone}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-slate-800 rounded-lg">
              <Mail className="h-5 w-5 text-green-400" />
              <span>{email}</span>
            </div>
          </div>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700">
            Solicitar Cotação
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <Truck className="h-8 w-8 text-green-400" />
            )}
            <span className="text-2xl font-bold">{nomeEmpresa}</span>
          </div>
          <p className="text-slate-400">&copy; 2024 {nomeEmpresa}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
