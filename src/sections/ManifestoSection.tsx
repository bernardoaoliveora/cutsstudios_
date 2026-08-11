import React from 'react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  const words = ['CORTE.', 'ESTILO.', 'PRESENÇA.'];

  return (
    <section
      id="manifesto"
      className="relative py-28 md:py-36 bg-[#050505] border-y border-white/5 overflow-hidden flex items-center justify-center"
    >
      {/* Background Accent Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-[#C9A227] font-semibold mb-6"
        >
          O MANIFESTO CUTS
        </motion.p>

        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          {words.map((word, index) => (
            <motion.h2
              key={word}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-heading font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter uppercase ${
                index === 1
                  ? 'text-gold-gradient'
                  : index === 2
                  ? 'text-white'
                  : 'text-white/80'
              }`}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 max-w-xl mx-auto text-neutral-400 text-sm sm:text-base font-normal leading-relaxed"
        >
          Mais do que cortar o cabelo, alinhamos a sua imagem com a sua melhor versão. Precisão cirúrgica em cada degradê.
        </motion.p>
      </div>
    </section>
  );
};
