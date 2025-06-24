
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-construction-800 to-construction-900 text-white pt-12 md:pt-16 w-full">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FB</span>
              </div>
              <div>
                <span className="text-xl font-bold text-blue-400">Construtora</span>
                <span className="text-xl font-bold text-white ml-1">ForteBase</span>
              </div>
            </Link>
            <p className="text-construction-300 mb-5 leading-relaxed text-sm md:text-base">
              Soluções completas em construção civil para transformar seus projetos em realidade.
              Qualidade, confiança e excelência há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: "#", label: "Facebook" },
                { Icon: Instagram, link: "#", label: "Instagram" },
                { Icon: Twitter, link: "#", label: "Twitter" },
                { Icon: Linkedin, link: "#", label: "LinkedIn" }
              ].map(({ Icon, link, label }) => (
                <a 
                  key={label} 
                  href={link} 
                  className="text-construction-400 hover:text-blue-400 transition-colors" 
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-400">Links Rápidos</h3>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre", to: "/about" },
                { label: "Serviços", to: "/services" },
                { label: "Projetos", href: "#projects" },
                { label: "Depoimentos", href: "#testimonials" },
                { label: "Contato", to: "/contact" }
              ].map(({ label, to, href }) => (
                <li key={label}>
                  {to ? (
                    <Link 
                      to={to} 
                      className="text-construction-300 hover:text-blue-400 transition-colors flex items-center text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                      {label}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="text-construction-300 hover:text-blue-400 transition-colors flex items-center text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-blue-400">Contato</h3>
            <ul className="space-y-4">
              {[
                { 
                  Icon: Phone, 
                  items: ["(11) 99999-9999", "(11) 3456-7890"],
                  className: "text-blue-400"
                },
                { 
                  Icon: Mail, 
                  items: ["contato@construtorafortebase.com.br"],
                  className: "text-blue-400"
                },
                { 
                  Icon: MapPin, 
                  items: [
                    "Av. Construção, 1000", 
                    "São Paulo - SP"
                  ],
                  className: "text-blue-400"
                }
              ].map(({ Icon, items, className }, index) => (
                <li key={index} className="flex items-start">
                  <Icon className={`w-5 h-5 ${className} mr-3 flex-shrink-0 mt-0.5`} />
                  <div>
                    {items.map((item, i) => (
                      <p key={i} className="text-construction-300 text-sm md:text-base">{item}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-construction-700 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-construction-400 text-xs md:text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Construtora ForteBase. Todos os direitos reservados.
          </p>
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-construction-900"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
