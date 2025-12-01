import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCategory } from '../types';
import { Check, ChevronDown, Plus } from 'lucide-react';

interface ServiceCardProps {
  category: ServiceCategory;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-3xl overflow-hidden group transition-all duration-500 relative w-full ${
        isOpen 
          ? 'ring-1 ring-neon-pink/50 bg-white/10 shadow-[0_0_30px_rgba(255,0,127,0.15)]' 
          : 'hover:bg-white/5 hover:border-neon-pink/30 hover:shadow-[0_0_20px_rgba(255,0,127,0.1)]'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 focus:outline-none relative z-10"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {/* Icon Box */}
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
              isOpen 
                ? 'bg-neon-pink text-white shadow-[0_0_15px_rgba(255,0,127,0.5)]' 
                : 'bg-white/5 text-neon-pink border border-white/10 group-hover:border-neon-pink/50 group-hover:text-white group-hover:bg-neon-pink'
            }`}>
              <div className="scale-110 md:scale-125">
                {category.icon}
              </div>
            </div>

            {/* Title & Description */}
            <div className="break-words">
              <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-300 leading-tight ${
                isOpen ? 'text-white' : 'text-gray-100 group-hover:text-white'
              }`}>
                {category.title}
              </h3>
              <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 line-clamp-2 ${
                isOpen ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300'
              }`}>
                {category.description}
              </p>
            </div>

            {/* CTA hint when closed */}
            {!isOpen && (
              <div className="flex items-center gap-2 text-xs font-bold text-neon-pink uppercase tracking-widest mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
                Ver Tabela
              </div>
            )}
          </div>
          
          {/* Arrow */}
          <div className={`p-2 md:p-3 rounded-full border transition-all duration-300 shrink-0 mt-2 ${
            isOpen 
              ? 'bg-white/20 border-transparent text-white rotate-180' 
              : 'border-white/10 text-gray-500 group-hover:border-neon-pink group-hover:text-neon-pink'
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 md:px-8 pb-8 pt-2">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
              
              <div className="space-y-3">
                {category.items.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    // APLICADO ESTILO PREMIUM (border-neon-pink/20 e bg-neon-pink/5) PARA TODOS OS ITENS
                    className="relative p-4 rounded-xl border border-neon-pink/20 bg-neon-pink/5 hover:border-neon-pink/50 hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,0,127,0.15)] transition-all duration-300 group/item active:scale-[0.99]"
                  >
                    <div className="flex items-start gap-3">
                      {/* Ícone de Check Rosa (Padrão para todos) */}
                      <div className="shrink-0 mt-0.5">
                         <div className="w-6 h-6 rounded-full border border-neon-pink/50 bg-neon-pink/10 flex items-center justify-center text-neon-pink shadow-[0_0_10px_rgba(255,0,127,0.3)] group-hover/item:bg-neon-pink group-hover/item:text-white transition-all duration-300">
                            <Check className="w-3.5 h-3.5" />
                         </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                           <div className="flex-1">
                              {/* Nome do Serviço */}
                              <h4 className="font-bold text-white group-hover/item:text-neon-pink transition-colors text-base md:text-lg leading-tight break-words">
                                {item.name}
                              </h4>
                              {/* Detalhes */}
                              {item.details && (
                                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed border-l-2 border-neon-pink/20 pl-3">
                                  {item.details}
                                </p>
                              )}
                           </div>
                           
                           {/* Preço */}
                           {item.price && (
                             <div className="shrink-0 self-start md:self-auto mt-2 md:mt-0">
                               <div className="px-3 py-1 rounded-md bg-black/40 border border-neon-pink/30 bg-neon-pink/5 group-hover/item:bg-neon-pink/20 transition-colors shadow-sm">
                                  <span className="text-sm font-display font-bold text-neon-pink whitespace-nowrap">
                                    {item.price}
                                  </span>
                               </div>
                             </div>
                           )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow effect at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-pink opacity-0 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'group-hover:opacity-100'}`} />
    </motion.div>
  );
};