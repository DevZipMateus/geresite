
import React from "react";
import { Cliente } from "@/types/database.types";
import AgronegocioTemplate from "@/components/templates/AgronegocioTemplate";

interface TemplateProps {
  cliente: Cliente;
  logoUrl?: string | null;
  handleSectionClick: (sectionId: string) => void;
}

// Mapeamento de categorias para seus respectivos componentes
export const getTemplateComponent = (categoria: string, templateId: string) => {
  switch (categoria) {
    case 'agronegocio':
      return AgronegocioTemplate;
    case 'contabilidade':
    default:
      // Para contabilidade, retornamos null para usar o template padrão existente
      return null;
  }
};

// Função para renderizar o template correto
export const renderTemplate = (
  cliente: Cliente, 
  logoUrl?: string | null, 
  handleSectionClick?: (sectionId: string) => void
) => {
  const TemplateComponent = getTemplateComponent(cliente.categoria, cliente.template_id);
  
  if (TemplateComponent) {
    return (
      <TemplateComponent 
        cliente={cliente} 
        logoUrl={logoUrl}
      />
    );
  }
  
  // Retorna null para usar o template padrão (MainContent)
  return null;
};
