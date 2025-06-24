
import React from 'react';
import { Globe, Users, Target, Award, ArrowRight, Mail, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">EmpresaPro</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-slate-700 hover:text-blue-600">Início</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Serviços</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Sobre</a>
            <a href="#" className="text-slate-700 hover:text-blue-600">Contato</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Soluções <span className="text-yellow-300">Profissionais</span> para Seu Negócio
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Template versátil e adaptável para qualquer segmento de mercado com design moderno e funcionalidades completas
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 flex items-center mx-auto space-x-2">
            <span>Começar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Consultoria', desc: 'Estratégias personalizadas para seu negócio' },
              { icon: Users, title: 'Equipe Especializada', desc: 'Profissionais qualificados e experientes' },
              { icon: Award, title: 'Qualidade Garantida', desc: 'Excelência em todos os projetos' }
            ].map((service, index) => (
              <div key={index} className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <service.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>contato@empresapro.com</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">EmpresaPro</span>
          </div>
          <p className="text-slate-400">&copy; 2024 EmpresaPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
