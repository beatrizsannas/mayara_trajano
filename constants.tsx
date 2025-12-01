import React from 'react';
import { Car, Droplets, Sparkles, Eye, ShieldCheck, Zap } from 'lucide-react';
import { ServiceCategory, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  name: "Mayara Trajano",
  phoneDisplay: "(99) 99999-9999",
  phone: "5599999999999", // Format for WhatsApp link
  instagram: "@mayara_trajano",
  instagramUrl: "https://instagram.com/mayara_trajano",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'wash',
    title: 'Lavagens Técnicas',
    description: 'O cuidado essencial que seu veículo merece com produtos de alta performance.',
    icon: <Droplets className="w-6 h-6" />,
    bgImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2370&auto=format&fit=crop",
    items: [
      { id: 'w1', name: 'Lavagem de Manutenção', details: 'Limpeza detalhada externa e interna básica.' },
      { id: 'w2', name: 'Lavagem Premium', details: 'Limpeza profunda, proteção de plásticos e cera protetora.', highlight: true },
    ]
  },
  {
    id: 'glass',
    title: 'Polimento de Vidros',
    description: 'Visibilidade e segurança andam lado a lado. Restaure a transparência cristalina removendo riscos.',
    icon: <Eye className="w-6 h-6" />,
    items: [
      { id: 'g1', name: 'Para-brisa Comum', details: 'Sedan / Hatch', price: 'R$ 350,00' },
      { id: 'g2', name: 'Para-brisa Caminhonete', price: 'R$ 450,00' },
      { id: 'g3', name: 'Para-brisa Vans / Furgões / FAN', price: 'R$ 500,00' },
      { id: 'g4', name: 'Para-brisa Luxo / Esportivos', price: 'R$ 600,00', highlight: true },
      { id: 'g5', name: 'Para-brisa Caminhão', price: 'R$ 650,00' },
      { id: 'g6', name: 'Vidros Laterais', details: 'Preço por unidade', price: 'R$ 250,00' },
      { id: 'g7', name: 'Vidro Traseiro (Vigia)', price: 'R$ 300,00' },
    ]
  },
  {
    id: 'paint',
    title: 'Polimento Técnico',
    description: 'Correção de verniz para eliminar riscos e devolver o brilho profundo de showroom.',
    icon: <Sparkles className="w-6 h-6" />,
    bgImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2370&auto=format&fit=crop",
    items: [
      { id: 'p1', name: 'Sedan / Hatch (Cor Clara)', price: 'R$ 600,00' },
      { id: 'p2', name: 'Sedan / Hatch (Cor Escura)', price: 'R$ 800,00', highlight: true },
      { id: 'p3', name: 'SUV Compacto (Cor Clara)', price: 'R$ 600,00' },
      { id: 'p4', name: 'SUV Compacto (Cor Escura)', price: 'R$ 800,00' },
      { id: 'p5', name: 'SUV Médio (Cor Clara)', price: 'R$ 700,00' },
      { id: 'p6', name: 'SUV Médio (Cor Escura)', price: 'R$ 900,00' },
      { id: 'p7', name: 'SUV Grande (Cor Clara)', price: 'R$ 800,00' },
      { id: 'p8', name: 'SUV Grande (Cor Escura)', price: 'R$ 1.000,00', highlight: true },
    ]
  },
  {
    id: 'protection',
    title: 'Vitrificação',
    description: 'A máxima proteção para a pintura. Camada cerâmica de alta dureza e hidrofobia.',
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      { id: 'v1', name: 'Vitrificação de Pintura', details: 'Carros novos (Sedan/Hatch). Execução 12h-24h.', price: 'A partir de R$ 900,00', highlight: true },
      { id: 'v2', name: 'Aplicação Vitrificador Soft99', details: 'Proteção básica de alta qualidade.', price: 'R$ 550,00' },
    ]
  },
  {
    id: 'lights',
    title: 'Recuperação de Farol',
    description: 'Devolva a transparência e a eficiência luminosa dos faróis do seu veículo.',
    icon: <Zap className="w-6 h-6" />,
    items: [
      { id: 'f1', name: 'Recuperação Externa', price: 'R$ 350,00' },
      { id: 'f2', name: 'Abertura de Farol', details: 'Serviço adicional quando necessário.', price: 'R$ 150,00 / un' },
    ]
  },
];