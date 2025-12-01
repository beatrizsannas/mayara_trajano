import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestion, X, Send, Bot, Phone, User, ExternalLink } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  // Propriedades para Botões de Ação (CTA)
  actionLabel?: string;
  actionUrl?: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Olá! Sou o assistente virtual da ${CONTACT_DATA.name}. Como posso ajudar com a estética do seu veículo hoje?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simular tempo de resposta da IA
    setTimeout(() => {
      const response = generateAutoResponse(userMsg.text);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        actionLabel: response.actionLabel,
        actionUrl: response.actionUrl
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  // Lógica de Resposta "Funil de Vendas" para WhatsApp
  const generateAutoResponse = (text: string): { text: string, actionLabel?: string, actionUrl?: string } => {
    const lowerText = text.toLowerCase();
    const waLink = `https://wa.me/${CONTACT_DATA.phone}`;
    
    // 1. Preço / Orçamento
    if (lowerText.includes('preço') || lowerText.includes('valor') || lowerText.includes('quanto') || lowerText.includes('custa')) {
      return {
        text: "Cada carro tem uma necessidade específica. Para te passar um valor justo e exato, a Mayara precisa ver uma foto ou avaliar o veículo. Vamos fazer isso rapidinho pelo WhatsApp?",
        actionLabel: "Solicitar Orçamento no WhatsApp",
        actionUrl: waLink
      };
    }
    
    // 2. Agendamento / Horário
    if (lowerText.includes('agendar') || lowerText.includes('horário') || lowerText.includes('marcar') || lowerText.includes('disponivel')) {
      return {
        text: "Nossa agenda é bem dinâmica! Para garantir o melhor horário para você, recomendo falar diretamente com nossa equipe agora.",
        actionLabel: "Verificar Disponibilidade",
        actionUrl: waLink
      };
    }
    
    // 3. Localização / Endereço
    if (lowerText.includes('onde') || lowerText.includes('local') || lowerText.includes('endereço') || lowerText.includes('fica')) {
      return {
        text: "Atendemos com exclusividade e hora marcada. Me chame no WhatsApp que te envio a localização exata e combinamos sua visita.",
        actionLabel: "Pedir Localização",
        actionUrl: waLink
      };
    }
    
    // 4. Dúvidas Técnicas (Polimento, Vitrificação, etc)
    if (lowerText.includes('polimento') || lowerText.includes('vitrificação') || lowerText.includes('farol') || lowerText.includes('lavagem') || lowerText.includes('ppf')) {
      return {
        text: "Somos especialistas nisso! Esse procedimento transforma o carro. Gostaria de ver alguns resultados ou receber uma avaliação técnica?",
        actionLabel: "Falar com Especialista",
        actionUrl: waLink
      };
    }
    
    // 5. Fallback (Qualquer outra coisa) -> Direcionar para humano
    return {
      text: "Entendi. Como sou uma assistente virtual, para te dar a atenção que você merece, vou transferir seu atendimento para a Mayara no WhatsApp, pode ser?",
      actionLabel: "Falar com Mayara Agora",
      actionUrl: waLink
    };
  };

  return (
    <>
    {/* Floating Action Button - Only visible when closed */}
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group ${isOpen ? 'hidden' : 'flex'}`}>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full shadow-[0_0_30px_rgba(255,0,127,0.6)] bg-neon-pink text-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Assistente Virtual"
        >
          <MessageCircleQuestion className="w-7 h-7" />
        </button>
      </div>

      {/* Chat Window Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            // Mobile: fixed inset-0 (full screen). Desktop: fixed bottom-right sized box.
            className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-[60] w-full h-full md:w-[380px] md:h-[550px] bg-[#121212] md:border border-white/10 md:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1a1a1a] p-4 border-b border-white/5 flex items-center justify-between shadow-md shrink-0 safe-top">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink to-purple-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(255,0,127,0.3)]">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white leading-tight text-lg">Mayara AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-purple-300 font-medium">Online Agora</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={`https://wa.me/${CONTACT_DATA.phone}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-400 text-gray-400 transition-colors"
                  title="Chamar no WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === 'user' ? 'bg-white/10 text-gray-300' : 'bg-neon-pink/10 text-neon-pink'
                    }`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-neon-pink text-white rounded-tr-sm shadow-[0_0_15px_rgba(255,0,127,0.2)]' 
                        : 'bg-[#1E1E1E] border border-white/5 text-gray-200 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>

                  {/* Botão de Ação (CTA) - Renderizado apenas se existir na mensagem */}
                  {msg.sender === 'bot' && msg.actionLabel && msg.actionUrl && (
                    <motion.a
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-10 mt-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-lg w-fit transition-colors"
                    >
                      {msg.actionLabel}
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0 text-neon-pink">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#1E1E1E] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#1a1a1a] border-t border-white/5 safe-bottom">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua dúvida..."
                  className="flex-1 bg-[#0a0a0a] text-white text-base md:text-sm rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:border-neon-pink/50 placeholder-gray-500 appearance-none"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-12 h-auto rounded-xl bg-neon-pink text-white flex items-center justify-center hover:bg-[#d9006c] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(255,0,127,0.3)] active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};