
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const SmartFooter = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Smart<span className="text-green-400">Home</span>
            </h3>
            <p className="text-slate-400">
              Transformando casas em lares inteligentes e seguros.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Automação Residencial</li>
              <li>Segurança Residencial</li>
              <li>Consultoria Técnica</li>
              <li>Suporte 24/7</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (21) 99999-9999
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contato@smarthome.com
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Rio de Janeiro, RJ
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-2 text-slate-400">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 SmartHome. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default SmartFooter;
