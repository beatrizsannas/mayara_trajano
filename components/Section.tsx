import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgImage?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", bgImage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0 w-full h-full">
            <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
        </>
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-neon-pink/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};