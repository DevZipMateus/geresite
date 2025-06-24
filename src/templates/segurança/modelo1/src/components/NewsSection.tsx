
import { useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Como as taxas de juros afetam os Pequenos Negócios",
    summary: "Entenda como as flutuações nas taxas de juros podem impactar diretamente o fluxo de caixa e as operações das micro e pequenas empresas.",
    date: "10 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    delay: 0
  },
  {
    id: 2,
    title: "Bancos passam a oferecer parcelamento do saldo total",
    summary: "O setor de pagamentos passa a oferecer uma nova opção para os consumidores: o parcelamento do saldo total da fatura do cartão de crédito.",
    date: "5 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    delay: 200
  },
  {
    id: 3,
    title: "Conexão entre loja física e online no varejo é tendência",
    summary: "O varejo se reinventa para atrair e conquistar clientes, especialmente nas datas comemorativas que movimentam o setor durante o ano.",
    date: "1 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    delay: 400
  }
];

const NewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white" id="news">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-duration-700">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
            Notícias e Artigos
          </span>
          <h2 className="heading-lg mb-6">
            Fique atualizado com as novidades
          </h2>
          <p className="subtitle">
            Acompanhe nossos artigos e notícias sobre contabilidade, tributação e
            gestão empresarial para manter seu negócio sempre atualizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="card overflow-hidden opacity-0 animate-duration-700"
              style={{ animationDelay: `${article.delay}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
                <Link to={`/news/${article.id}`} className="button-text inline-flex items-center">
                  Ler mais
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/news" className="button-secondary">
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
