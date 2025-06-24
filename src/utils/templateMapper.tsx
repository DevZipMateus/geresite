
import React from "react";
import { Cliente } from "@/types/database.types";
import AgronegocioTemplate from "@/components/templates/AgronegocioTemplate";
import ContabilidadeTemplate1 from "@/components/templates/ContabilidadeTemplate1";
import ContabilidadeTemplate2 from "@/components/templates/ContabilidadeTemplate2";
import TecnologiaTemplate1 from "@/components/templates/TecnologiaTemplate1";
import TecnologiaTemplate2 from "@/components/templates/TecnologiaTemplate2";
import ComunicacaoTemplate1 from "@/components/templates/ComunicacaoTemplate1";
import ModaTemplate1 from "@/components/templates/ModaTemplate1";
import SegurancaTemplate1 from "@/components/templates/SegurancaTemplate1";
import SegurancaTemplate2 from "@/components/templates/SegurancaTemplate2";
import ComercioTemplate1 from "@/components/templates/ComercioTemplate1";
import AlimenticiaTemplate1 from "@/components/templates/AlimenticiaTemplate1";
import GenericoTemplate1 from "@/components/templates/GenericoTemplate1";
import TransportesTemplate1 from "@/components/templates/TransportesTemplate1";

interface TemplateProps {
  cliente: Cliente;
  logoUrl?: string | null;
}

// Mapeamento de categorias e template_id para seus respectivos componentes
export const getTemplateComponent = (categoria: string, templateId: string) => {
  switch (categoria) {
    case 'agronegocio':
      return AgronegocioTemplate;
    
    case 'contabilidade':
      switch (templateId) {
        case '1':
          return ContabilidadeTemplate1;
        case '2':
          return ContabilidadeTemplate2;
        default:
          return ContabilidadeTemplate1; // fallback para modelo 1
      }
    
    case 'tecnologia':
      switch (templateId) {
        case 'tech-1':
          return TecnologiaTemplate1;
        case 'tech-2':
          return TecnologiaTemplate2;
        default:
          return TecnologiaTemplate1; // fallback para modelo 1
      }
    
    case 'comunicacao':
      switch (templateId) {
        case 'com-1':
          return ComunicacaoTemplate1;
        default:
          return ComunicacaoTemplate1;
      }
    
    case 'moda':
      switch (templateId) {
        case 'moda-1':
          return ModaTemplate1;
        default:
          return ModaTemplate1;
      }
    
    case 'seguranca':
      switch (templateId) {
        case 'seg-1':
          return SegurancaTemplate1;
        case 'seg-2':
          return SegurancaTemplate2;
        default:
          return SegurancaTemplate1; // fallback para modelo 1
      }
    
    case 'comercio':
      switch (templateId) {
        case 'com-1':
          return ComercioTemplate1;
        default:
          return ComercioTemplate1;
      }
    
    case 'alimenticia':
      switch (templateId) {
        case 'ali-1':
          return AlimenticiaTemplate1;
        default:
          return AlimenticiaTemplate1;
      }
    
    case 'generico':
      switch (templateId) {
        case 'gen-1':
          return GenericoTemplate1;
        default:
          return GenericoTemplate1;
      }
    
    case 'transportes':
      switch (templateId) {
        case 'tra-1':
          return TransportesTemplate1;
        default:
          return TransportesTemplate1;
      }
    
    default:
      // Para categorias não mapeadas, retorna null para usar o template padrão
      return null;
  }
};

// Função para renderizar o template correto
export const renderTemplate = (
  cliente: Cliente, 
  logoUrl?: string | null
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
