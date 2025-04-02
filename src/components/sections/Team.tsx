
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-3">
          <a 
            href="#" 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a 
            href="#" 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a 
            href="#" 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Carlos Silva",
      position: "CEO & Fundador",
      image: "/placeholder.svg",
      bio: "Com mais de 15 anos de experiência no mercado, Carlos lidera nossa empresa com visão e inovação."
    },
    {
      name: "Ana Oliveira",
      position: "Diretora de Operações",
      image: "/placeholder.svg",
      bio: "Especialista em otimizar processos e garantir a excelência em todas as nossas operações."
    },
    {
      name: "Roberto Santos",
      position: "Consultor Sênior",
      image: "/placeholder.svg",
      bio: "Roberto traz sua vasta experiência para desenvolver estratégias personalizadas para nossos clientes."
    },
    {
      name: "Juliana Costa",
      position: "Especialista Jurídica",
      image: "/placeholder.svg",
      bio: "Formada em Direito Empresarial, Juliana garante a conformidade legal de todos os nossos serviços."
    }
  ];

  return (
    <section id="team" className="py-20 px-8 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium">NOSSA EQUIPE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">Conheça Nossos Especialistas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos com profissionais altamente qualificados e comprometidos com a excelência em cada projeto.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={index * 100}>
              <TeamMember {...member} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
