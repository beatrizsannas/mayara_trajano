import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_DATA } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Small delay to allow menu closing animation
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer z-50 relative" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-purple-600 flex items-center justify-center font-display font-bold text-white text-lg shadow-[0_0_15px_rgba(255,0,127,0.5)]">
                M
              </div>
              <span className="text-lg md:text-xl font-display font-bold tracking-tight text-white">
                MAYARA <span className="text-neon-pink">TRAJANO</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">SERVIÇOS</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">SOBRE</button>
              <a 
                href={`https://wa.me/${CONTACT_DATA.phone}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-neon-pink hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-neon-pink/50"
              >
                <Phone className="w-4 h-4" />
                <span>Contato</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 relative">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors active:scale-95"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-xl font-display font-bold text-white hover:bg-white/10 active:scale-[0.98] transition-all"
                >
                  Catálogo de Serviços
                  <ArrowRight className="text-neon-pink w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-xl font-display font-bold text-white hover:bg-white/10 active:scale-[0.98] transition-all"
                >
                  Sobre a Especialista
                  <ArrowRight className="text-neon-pink w-5 h-5" />
                </button>
              </div>

              <div className="mt-auto">
                <p className="text-center text-gray-500 text-sm mb-4">Dúvidas ou agendamentos?</p>
                <a 
                  href={`https://wa.me/${CONTACT_DATA.phone}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-neon-pink text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,127,0.4)] active:scale-[0.98] transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};