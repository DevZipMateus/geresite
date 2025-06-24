
import React from 'react';

const clients = [{
  id: 1,
  name: 'Construtora Segura',
  logo: '/lovable-uploads/ebddf75c-7017-4d4b-9b50-4f07a02300b6.png',
  logoPosition: 'object-center'
}, {
  id: 2,
  name: 'Indústria Metalúrgica SP',
  logo: '/lovable-uploads/d1aa02a6-86ac-4242-81ab-87000f020071.png',
  logoPosition: 'object-center'
}, {
  id: 3,
  name: 'Petroquímica Brasil',
  logo: '/lovable-uploads/2b49cfe4-7f8e-4c7a-abf2-bb13c38c6df2.png',
  logoPosition: 'object-center'
}, {
  id: 4,
  name: 'Mineração Forte',
  logo: '/lovable-uploads/5e396f3e-f563-4133-80ef-91d9a40a8247.png',
  logoPosition: 'object-center'
}];

const Testimonials = () => {
  return (
    <section id="clients" className="section py-20 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ds3-dark mb-6 text-shadow-md">Nossos Principais Clientes</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map(client => (
            <div key={client.id} className="bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all p-8 rounded-lg flex items-center justify-center h-48">
              <img src={client.logo} alt={client.name} className="max-h-32 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
