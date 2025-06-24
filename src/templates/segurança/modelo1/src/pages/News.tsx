
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import NewsSection from "@/components/NewsSection";

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-20 pb-6 md:pt-28 md:pb-8 bg-gradient-to-b from-scarlet-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-3 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Notícias
              </span>
              <h1 className={`heading-xl mb-3 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Fique por dentro das <span className="text-gradient">novidades</span>
              </h1>
              <p className={`subtitle mx-auto mb-3 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Acompanhe as últimas notícias e atualizações do mundo contábil e fiscal
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-white">
          <NewsSection />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default News;
