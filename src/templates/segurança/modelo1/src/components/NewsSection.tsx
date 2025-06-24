
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Nova Tecnologia de Reconhecimento Facial Implementada',
      excerpt: 'Revolucionando a segurança com tecnologia de ponta que identifica pessoas em tempo real.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Tecnologia',
      image: '🔍'
    },
    {
      id: 2,
      title: 'Parceria com a Polícia Civil para Monitoramento Urbano',
      excerpt: 'Nova parceria fortalece a segurança pública com integração de sistemas de monitoramento.',
      date: '2024-01-10',
      readTime: '3 min',
      category: 'Parcerias',
      image: '🤝'
    },
    {
      id: 3,
      title: 'Sistema de Alarmes Inteligentes com IA',
      excerpt: 'Inteligência artificial reduz falsos alarmes em 90% e aumenta eficiência.',
      date: '2024-01-05',
      readTime: '4 min',
      category: 'Inovação',
      image: '🤖'
    },
    {
      id: 4,
      title: 'Expansão dos Serviços para Interior do Estado',
      excerpt: 'Levamos nossa expertise em segurança para mais cidades do Rio de Janeiro.',
      date: '2023-12-28',
      readTime: '2 min',
      category: 'Expansão',
      image: '🏢'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Últimas <span className="text-blue-600">Notícias</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fique por dentro das novidades, inovações e projetos em segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-slate-700 flex items-center justify-center">
                <div className="text-6xl opacity-80">{article.image}</div>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('pt-BR')}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                    <span>Ler mais</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Ver Todas as Notícias
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
