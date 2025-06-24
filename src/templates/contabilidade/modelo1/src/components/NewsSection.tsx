
import NewsCard from './NewsCard';
import AnimatedSection from './AnimatedSection';

const NewsSection = () => {
  const news = [
    {
      title: "Mudanças na legislação tributária para 2023",
      excerpt: "Confira as principais alterações na legislação tributária que entrarão em vigor no próximo ano e como elas podem afetar seu negócio.",
      date: "10 de Maio, 2023",
      category: "Tributário",
      imageUrl: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Como o MEI deve se preparar para a declaração anual",
      excerpt: "Saiba quais documentos separar e como se organizar para fazer sua declaração anual de MEI sem complicações.",
      date: "28 de Abril, 2023",
      category: "MEI",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Benefícios fiscais para pequenas empresas",
      excerpt: "Descubra quais são os benefícios fiscais disponíveis para pequenas empresas e como aproveitá-los para reduzir sua carga tributária.",
      date: "15 de Abril, 2023",
      category: "Fiscal",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
    }
  ];

  return (
    <section id="notícias" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Notícias e Conteúdos</h2>
          <p className="section-subtitle">
            Fique por dentro das novidades e informações relevantes para o seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {news.map((item, index) => (
            <AnimatedSection 
              key={item.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <NewsCard 
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <a href="#" className="btn-secondary inline-block">
            Ver todas as notícias
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsSection;
