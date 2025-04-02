
import React, { useState } from 'react';

const Map = () => {
  const [mapError, setMapError] = useState<string | null>(null);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <p className="text-red-500">{mapError}</p>
        </div>
      )}
      
      <div className="w-full h-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.9201000434053!2d-53.80986202366688!3d-29.68720757550846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb7c6d756337%3A0x65ad6572e550e552!2sR.%20do%20Acampamento%2C%20380%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097050-001!5e0!3m2!1spt-BR!2sbr!4v1651252345678!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setMapError('Erro ao carregar o mapa')}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Map;
