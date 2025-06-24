
import { LayoutTemplate, Tag, Wheat, Calculator, Monitor, MessageCircle, Shirt, Shield } from 'lucide-react';
import React from 'react';
import { TemplateCategory } from '@/components/TemplateCategories';

export interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  formUrl: string;
  previewUrl: string;
  category: string;
}

// Template categories
export const categories: TemplateCategory[] = [
  {
    id: 'all',
    name: 'Todos',
    icon: React.createElement(LayoutTemplate, { className: "h-4 w-4" })
  },
  {
    id: 'contabilidade',
    name: 'Contabilidade',
    icon: React.createElement(Calculator, { className: "h-4 w-4" })
  },
  {
    id: 'agronegocio',
    name: 'Agronegócio',
    icon: React.createElement(Wheat, { className: "h-4 w-4" })
  },
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    icon: React.createElement(Monitor, { className: "h-4 w-4" })
  },
  {
    id: 'comunicacao',
    name: 'Comunicação',
    icon: React.createElement(MessageCircle, { className: "h-4 w-4" })
  },
  {
    id: 'moda',
    name: 'Moda',
    icon: React.createElement(Shirt, { className: "h-4 w-4" })
  },
  {
    id: 'seguranca',
    name: 'Segurança',
    icon: React.createElement(Shield, { className: "h-4 w-4" })
  }
];

// Templates for all categories
export const allTemplates: Template[] = [
  // Contabilidade Templates (apenas 2)
  {
    id: '1',
    title: 'Contabilidade Modelo 1',
    description: 'Template completo que transforma contabilidade em um diferencial competitivo para sua empresa.',
    imageUrl: '/imagens/contabilidade-harmonica.png',
    formUrl: 'https://forms.gle/ZfjYVLSiq6yCAbLG8',
    previewUrl: 'https://contabilidade1.montesite.com.br',
    category: 'contabilidade'
  },
  {
    id: '2',
    title: 'Contabilidade Modelo 2',
    description: 'Design sofisticado para serviços contábeis personalizados para o sucesso do seu negócio.',
    imageUrl: '/imagens/contabilidade-template.png',
    formUrl: 'https://forms.gle/2LTx1sApPFp24msV9',
    previewUrl: 'https://contabilidade2.montesite.com.br',
    category: 'contabilidade'
  },
  
  // Agronegócio Templates
  {
    id: 'agro-1',
    title: 'AgroTech Premium',
    description: 'Template moderno para empresas do agronegócio com foco em tecnologia e inovação.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'agronegocio'
  },
  
  // Tecnologia Templates
  {
    id: 'tech-1',
    title: 'TechSolutions Modelo 1',
    description: 'Template profissional para empresas de tecnologia com design moderno e funcional.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'tecnologia'
  },
  {
    id: 'tech-2',
    title: 'TechSolutions Modelo 2',
    description: 'Design avançado para startups e empresas de tecnologia com foco em inovação.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'tecnologia'
  },
  
  // Comunicação Templates
  {
    id: 'com-1',
    title: 'Comunicação Premium',
    description: 'Template elegante para agências de comunicação e marketing digital.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'comunicacao'
  },
  
  // Moda Templates
  {
    id: 'moda-1',
    title: 'Fashion Style',
    description: 'Template sofisticado para marcas de moda e lifestyle com design contemporâneo.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'moda'
  },
  
  // Segurança Templates
  {
    id: 'seg-1',
    title: 'Segurança Modelo 1',
    description: 'Template profissional para empresas de segurança e vigilância.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'seguranca'
  },
  {
    id: 'seg-2',
    title: 'Segurança Modelo 2',
    description: 'Design robusto para empresas de segurança eletrônica e monitoramento.',
    imageUrl: '/placeholder.svg',
    formUrl: '#',
    previewUrl: '#',
    category: 'seguranca'
  }
];
