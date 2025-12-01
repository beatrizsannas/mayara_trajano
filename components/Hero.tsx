import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Função robusta para rolagem suave com compensação da Navbar
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    
    if (servicesSection) {
      // Calcula a posição do elemento em relação ao topo da página
      const navbarHeight = 90; // Altura aproximada da navbar para compensação
      const elementPosition = servicesSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      // Executa a rolagem manual
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // Use 100dvh (dynamic viewport height) to account for mobile browser address bars
    <section id="hero" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - McLaren P1 with Neon Pink Color Grade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-black/40 z-10" />
        
        {/* We use a high-res orange/red McLaren P1 and shift hue to Pink/Magenta (-50deg) */}
        {/* Opacity set to 30% for better readability/accessibility while keeping the vibe */}
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2800&auto=format&fit=crop" 
          alt="Neon Pink McLaren P1" 
          className="w-full h-full object-cover opacity-30 scale-105"
          style={{ 
            filter: 'hue-rotate(315deg) contrast(1.1) saturate(1.2)',
            transform: 'scale(1.05)',
            objectPosition: 'center 60%' // Adjust focal point for mobile portrait
          }}
        />
        
        {/* Overlay to unify the pink tint */}
        <div className="absolute inset-0 bg-neon-pink/5 mix-blend-overlay z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-neon-pink/50 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,0,127,0.5)]">
            <span className="text-neon-pink text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">Estética Automotiva Premium</span>
          </div>
          
          {/* Typography scaled down slightly for smaller mobile screens */}
          <h1 className="font-display font-black text-4xl sm:text-7xl md:text-9xl leading-none text-white mb-4 tracking-tighter drop-shadow-2xl">
            MAYARA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-purple-500" style={{ textShadow: '0 0 30px rgba(255,0,127,0.5)' }}>
              TRAJANO
            </span>
          </h1>

          {/* Lista de Serviços Minimalista - Clean e Pequena */}
          <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-8 md:mb-10 opacity-80 max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>PPF</span>
            <span className="text-neon-pink text-lg leading-none">·</span>
            <span>Polimento</span>
            <span className="text-neon-pink text-lg leading-none">·</span>
            <span>Vitrificação</span>
            <span className="text-neon-pink text-lg leading-none">·</span>
            <span>Recuperação de Farol</span>
          </p>
          
          <p className="text-gray-200 text-base md:text-2xl max-w-3xl mx-auto mb-10 md:mb-12 font-light drop-shadow-md px-2">
            Criamos <strong className="text-white font-semibold">obras de arte</strong> sobre rodas. A máxima expressão de brilho e proteção para quem dirige o extraordinário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            {/* Botão com tamanho reduzido e funcionalidade de scroll corrigida */}
            <button 
              onClick={handleScrollToServices}
              className="w-full sm:w-auto px-6 md:px-8 py-3 rounded-full bg-neon-pink text-white font-bold text-base hover:bg-[#d9006c] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,127,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer z-30 relative"
            >
              Ver Tabela de Preços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>
    </section>
  );
};
