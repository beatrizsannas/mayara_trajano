import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ServiceCard } from './components/ServiceCard';
import { SERVICE_CATEGORIES, CONTACT_DATA } from './constants';
import { Instagram, Smartphone, AlertCircle } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-neon-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <Section id="services">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Catálogo Exclusivo</h2>
            <div className="w-24 h-1 bg-neon-pink mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto px-4 text-sm md:text-base">
              Escolha o tratamento ideal para o seu carro. Preços transparentes e qualidade garantida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-start">
            {SERVICE_CATEGORIES.map((category, index) => (
              <ServiceCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Custom Service Note */}
          <div className="mt-16 glass-card p-6 md:p-8 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
             <div className="flex justify-center mb-4 text-neon-pink">
                <AlertCircle className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold mb-2">Não encontrou o que procura?</h3>
             <p className="text-gray-400 mb-6 text-sm md:text-base">
               Cada veículo é único. Se você precisa de um serviço específico que não está listado acima, 
               entre em contato para uma avaliação personalizada.
             </p>
             <a 
               href={`https://wa.me/${CONTACT_DATA.phone}`} 
               className="inline-flex items-center text-neon-pink font-semibold hover:text-white transition-colors border-b border-neon-pink pb-1"
             >
               Solicitar orçamento personalizado
             </a>
          </div>
        </Section>

        {/* About / Profile Section */}
        <Section id="about" className="bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Container - Adjusted aspect ratio for mobile to not take up too much vertical space */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] md:aspect-square">
                {/* Image updated to a Pink Car (Red Ferrari with hue rotation) */}
                <img 
                  src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop" 
                  alt="Carro Esportivo Rosa - Mayara Trajano" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'hue-rotate(315deg) contrast(1.1) saturate(1.1)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-neon-pink font-bold text-xs md:text-sm tracking-wider mb-1">FOUNDER & SPECIALIST</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">Mayara Trajano</h3>
                </div>
              </div>
            </div>
            
            <div className="px-2">
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
                Paixão por <span className="text-neon-pink">Perfeição</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Especialista em transformar veículos em obras de arte. Com anos de experiência e certificações em estética automotiva, 
                ofereço um atendimento onde cada detalhe é tratado com precisão cirúrgica.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink shrink-0">
                    <Smartphone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contato Direto</p>
                    <p className="font-bold text-lg break-all">{CONTACT_DATA.phoneDisplay}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 active:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink shrink-0">
                    <Instagram />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Siga no Instagram</p>
                    <a href={CONTACT_DATA.instagramUrl} target="_blank" rel="noreferrer" className="font-bold text-lg hover:text-neon-pink transition-colors">
                      {CONTACT_DATA.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer id="contact" className="py-12 border-t border-white/10 bg-black pb-24 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-2xl mb-8">MAYARA <span className="text-neon-pink">TRAJANO</span></h2>
            
            <div className="flex justify-center gap-6 mb-8">
               <a href={CONTACT_DATA.instagramUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors p-2">Instagram</a>
               <a href={`https://wa.me/${CONTACT_DATA.phone}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors p-2">WhatsApp</a>
            </div>
            
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Mayara Trajano Estética Automotiva. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>

      {/* New Chat Widget Component */}
      <ChatWidget />
    </div>
  );
}

export default App;