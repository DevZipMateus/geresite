
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CheckCircle, Clock, Award, Users, TrendingUp, Building, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
    professionals: 0
  });
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simple counter animation
    const interval = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        
        if (newCounts.years < 15) newCounts.years += 1;
        if (newCounts.clients < 350) newCounts.clients += 10;
        if (newCounts.satisfaction < 98) newCounts.satisfaction += 2;
        if (newCounts.professionals < 20) newCounts.professionals += 1;
        
        // Stop the interval when all counts reach their targets
        if (newCounts.years === 15 && newCounts.clients === 350 && 
            newCounts.satisfaction === 98 && newCounts.professionals === 20) {
          clearInterval(interval);
        }
        
        return newCounts;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-scarlet-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-scarlet-100 text-scarlet-700 mb-4 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Sobre Nós
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-4 leading-tight opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Nossa <span className="text-scarlet-700">história</span> e valores
              </h1>
              <p className={`text-lg text-gray-600 mx-auto mb-6 max-w-3xl opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Com mais de 15 anos de experiência, oferecemos soluções contábeis simplificadas 
                e eficientes para empresas de todos os portes, com foco na satisfação dos nossos clientes.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 opacity-0 ${isVisible ? 'animate-slideDown delay-300' : ''}`}>
                <Link to="/services">
                  <Button variant="default" size="lg" className="rounded-full">
                    Nossos Serviços
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="rounded-full">
                    Entre em Contato
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Timeline Section */}
        <section className="py-12 md:py-16 bg-scarlet-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-scarlet-100 text-scarlet-700 mb-3">
                Nossa Jornada
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Como nos <span className="text-scarlet-700">tornamos</span> quem somos
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Uma trajetória de dedicação e aprendizado constante
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-scarlet-200 transform md:translate-x-px"></div>
              
              {/* Timeline items */}
              <div className="space-y-10">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-scarlet-700 mb-2">2008</h3>
                      <h4 className="text-lg font-semibold mb-2">Fundação</h4>
                      <p className="text-gray-600">Iniciamos nossa jornada com uma pequena equipe e grandes sonhos.</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-scarlet-600 border-4 border-white shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center text-white">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="flex-1 md:pl-10 md:text-left"></div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 mb-6 md:mb-0 md:hidden"></div>
                  <div className="w-10 h-10 rounded-full bg-scarlet-600 border-4 border-white shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex-1 md:pl-10 md:text-left">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-scarlet-700 mb-2">2012</h3>
                      <h4 className="text-lg font-semibold mb-2">Expansão</h4>
                      <p className="text-gray-600">Expandimos nossa equipe e ampliamos o portfólio de serviços oferecidos.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-scarlet-700 mb-2">2016</h3>
                      <h4 className="text-lg font-semibold mb-2">Tecnologia</h4>
                      <p className="text-gray-600">Implementamos novas tecnologias para oferecer serviços mais eficientes.</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-scarlet-600 border-4 border-white shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center text-white">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 md:pl-10 md:text-left"></div>
                </div>
                
                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-10 mb-6 md:mb-0 md:hidden"></div>
                  <div className="w-10 h-10 rounded-full bg-scarlet-600 border-4 border-white shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="flex-1 md:pl-10 md:text-left">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-scarlet-700 mb-2">Presente</h3>
                      <h4 className="text-lg font-semibold mb-2">Excelência</h4>
                      <p className="text-gray-600">Hoje, somos referência em contabilidade com foco em qualidade e eficiência.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Numbers Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-scarlet-100 text-scarlet-700 mb-3">
                Nossos Números
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Resultados que demonstram nosso <span className="text-scarlet-700">compromisso</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Números que refletem nossa trajetória de sucesso e dedicação aos clientes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-scarlet-50 p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.years}</h3>
                <p className="text-gray-600 font-medium">Anos de Atuação</p>
              </div>
              
              <div className="bg-scarlet-50 p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.clients}+</h3>
                <p className="text-gray-600 font-medium">Clientes Atendidos</p>
              </div>
              
              <div className="bg-scarlet-50 p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.satisfaction}%</h3>
                <p className="text-gray-600 font-medium">Satisfação</p>
              </div>
              
              <div className="bg-scarlet-50 p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 mx-auto mb-4 bg-scarlet-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-scarlet-600" />
                </div>
                <h3 className="text-3xl font-bold text-scarlet-700 mb-2">{counts.professionals}</h3>
                <p className="text-gray-600 font-medium">Profissionais</p>
              </div>
            </div>
          </div>
        </section>
        
        <TeamSection />
        
        <section className="bg-scarlet-50">
          <TestimonialsSection />
        </section>
        
        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Pronto para simplificar a <span className="text-scarlet-700">contabilidade</span> da sua empresa?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar o seu negócio a crescer com soluções contábeis personalizadas.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg" className="rounded-full">
                  Fale com um especialista
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default About;
