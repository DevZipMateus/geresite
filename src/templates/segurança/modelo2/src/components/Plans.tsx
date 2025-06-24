import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';
const plans = [{
  id: 1,
  name: 'Plano Essencial',
  price: '99,99',
  description: 'Ideal para microempresas ou empreendedores individuais que buscam serviços básicos de contabilidade.',
  features: [{
    text: 'Emissão de até 10 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos',
    included: true
  }, {
    text: 'Suporte contábil por e-mail',
    included: true
  }, {
    text: 'Relatório financeiro básico mensal',
    included: true
  }, {
    text: 'Acompanhamento básico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: false
  }, {
    text: 'Otimização fiscal',
    included: false
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: false,
  delay: '0s',
  color: 'bg-neutral-50'
}, {
  id: 2,
  name: 'Plano Business',
  price: '269,99',
  description: 'Perfeito para pequenas empresas que necessitam de suporte contábil mais abrangente e relatórios detalhados.',
  features: [{
    text: 'Emissão de até 30 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil por e-mail e telefone',
    included: true
  }, {
    text: 'Relatório financeiro detalhado mensal',
    included: true
  }, {
    text: 'Acompanhamento mensal de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: true
  }, {
    text: 'Otimização fiscal',
    included: true
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: true,
  delay: '0.1s',
  color: 'bg-amber-50'
}, {
  id: 3,
  name: 'Plano Enterprise',
  price: '699,99',
  description: 'Solução completa para empresas que requerem acompanhamento contábil contínuo e consultoria estratégica.',
  features: [{
    text: 'Emissão ilimitada de notas fiscais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil ilimitado por e-mail, telefone e chat',
    included: true
  }, {
    text: 'Relatórios financeiros completos mensais e trimestrais',
    included: true
  }, {
    text: 'Acompanhamento estratégico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil mensal e planejamento financeiro',
    included: true
  }, {
    text: 'Otimização fiscal avançada',
    included: true
  }, {
    text: 'Atendimento personalizado prioritário',
    included: true
  }],
  popular: false,
  delay: '0.2s',
  color: 'bg-neutral-50'
}];
const Plans = () => {
  const isMobile = useIsMobile();
  return;
};
export default Plans;