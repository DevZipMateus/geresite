
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Diretora',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    delay: '0s'
  },
  {
    id: 2,
    name: 'Joel Antônio',
    role: 'Contador',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Jéssica Souza',
    role: 'Contadora',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    delay: '0.2s'
  },
  {
    id: 4,
    name: 'Luiz Ricardo',
    role: 'Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    delay: '0.3s'
  }
];

const Team = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Equipe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça os profissionais por trás dos nossos serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa equipe de especialistas está pronta para oferecer as melhores soluções contábeis para o seu negócio.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: member.delay }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-corporate-blue mb-4">{member.role}</p>
                
                {/* Social Icons */}
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue p-2 rounded-full transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue p-2 rounded-full transition-colors duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
