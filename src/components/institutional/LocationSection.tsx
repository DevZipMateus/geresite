
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import Map from '@/components/Map';

const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Localização</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Endereço</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-gray-700">R. do Acampamento, 380</p>
                  <p className="text-gray-700">Centro, Santa Maria - RS</p>
                  <p className="text-gray-700">CEP: 97050-001</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-2">Horário de Funcionamento</h4>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="text-gray-700">Segunda a Sexta: 9h - 18h</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="text-gray-700">Sábado: 9h - 13h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <Map />
            <div className="mt-4 text-center text-sm text-gray-500">
              <a 
                href="https://maps.app.goo.gl/vsFTxh19pfP6YTGe9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center justify-center gap-1"
              >
                <MapPin className="h-4 w-4" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
