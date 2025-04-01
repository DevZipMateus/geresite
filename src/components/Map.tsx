
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Token público de teste do Mapbox - em produção use um token próprio
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXRva2VuIiwiYSI6ImNrcTRuemE2NzBnZGQydnBnNTFiemttbTIifQ.FKlA8yHbDozP4K1TwYEKsQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 15,
      center: [-46.6333, -23.5505], // São Paulo por padrão
    });

    // Adiciona controles de navegação
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Adiciona um marcador no centro
    new mapboxgl.Marker()
      .setLngLat([-46.6333, -23.5505])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
