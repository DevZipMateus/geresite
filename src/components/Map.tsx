
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
    
    // Coordenadas para R. do Acampamento, 380 - Centro, Santa Maria - RS
    const lng = -53.8073;
    const lat = -29.6874;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 16,
      center: [lng, lat],
      pitch: 40, // Inclinação para dar profundidade
      bearing: 20, // Rotação leve do mapa
    });

    // Adiciona controles de navegação
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Efeito 3D nos edifícios quando o estilo carregar
    map.current.on('style.load', () => {
      map.current?.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    });

    // Adiciona um marcador personalizado no endereço específico
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<strong>R. do Acampamento, 380</strong><br>Centro, Santa Maria - RS');

    const marker = new mapboxgl.Marker({
      color: '#3670e4',
      scale: 1.2,
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map.current);

    // Mostra o popup no carregamento inicial
    marker.togglePopup();

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
