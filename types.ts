import React from 'react';

export interface ServiceItem {
  id: string;
  name: string;
  price?: string;
  details?: string;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: ServiceItem[];
  bgImage?: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  instagram: string;
  instagramUrl: string;
  name: string;
}