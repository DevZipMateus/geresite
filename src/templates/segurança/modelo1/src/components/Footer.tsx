
import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">
                Secure<span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Protegendo famílias e empresas há mais de 15 anos com tecnologia de ponta e atendimento especializado.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">CFTV e Monitoramento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistemas de Alarme</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Controle de Acesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança Patrimonial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Central de Monitoramento</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(21) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@securepro.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rua da Segurança, 123<br />Centro - Rio de Janeiro/RJ</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-slate-900 rounded-lg">
              <h5 className="text-white font-semibold mb-2">🚨 Emergência 24h</h5>
              <p className="text-blue-400 font-bold">(21) 9999-0000</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 SecurePro. Todos os direitos reservados. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Política de Privacidade</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
