
import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Como as taxas de juros afetam os Pequenos Negócios',
    excerpt: 'Artigo discutindo o impacto das taxas de juros nas micro e pequenas empresas e como se preparar para mudanças econômicas.',
    date: '15 de Abril, 2023',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    delay: '0s'
  },
  {
    id: 2,
    title: 'Bancos passam a oferecer parcelamento do saldo total',
    excerpt: 'Notícia sobre a nova opção de parcelamento do saldo total oferecida pelo setor de pagamentos e como isso impacta as empresas.',
    date: '03 de Abril, 2023',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Conexão entre loja física e online no varejo é tendência',
    excerpt: 'Discussão sobre a reinvenção do varejo para atrair e conquistar clientes, especialmente em datas comemorativas e novas estratégias.',
    date: '28 de Março, 2023',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    delay: '0.2s'
  }
];

const News = () => {
  return (
    <section id="news" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Notícias e Artigos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fique atualizado com o mercado
          </h2>
          <p className="text-gray-600 text-lg">
            Acompanhe nossos artigos e notícias para se manter informado sobre as mudanças no mundo contábil e empresarial.
          </p>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: article.delay }}
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarDays size={14} className="mr-2" />
                  {article.date}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-corporate-blue transition-colors duration-300">
                  <a href="#">{article.title}</a>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Read More */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-corporate-blue hover:text-corporate-darkBlue font-medium transition-colors duration-300"
                >
                  Leia mais 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary inline-block">
            Ver todas as notícias
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
