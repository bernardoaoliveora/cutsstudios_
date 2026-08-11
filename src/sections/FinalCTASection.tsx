import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-28 md:py-36 bg-[#050505] relative overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#C9A227]/20 via-[#E7C75F]/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Logo Watermark in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img
          src="/img/logo.jpg"
          alt="CUTS Watermark"
          className="w-[600px] h-[600px] object-cover rounded-full filter grayscale"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#E7C75F] text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>EXPERIÊNCIA EXCLUSIVA</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.95] mb-6"
        >
          SEU PRÓXIMO CORTE <br />
          <span className="text-gold-gradient">COMEÇA AQUI.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-300 font-normal max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Agende seu horário na CUTS STUDIOS e garanta o alinhamento perfeito do seu estilo com o barbeiro Thiago Menezes.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={onOpenBooking}
            data-cursor-hover
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#E7C75F] via-[#C9A227] to-[#E7C75F] bg-[length:200%_auto] text-[#050505] font-black text-xs sm:text-sm uppercase tracking-[0.25em] flex items-center gap-4 shadow-2xl shadow-[#C9A227]/30 hover:shadow-[#C9A227]/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>AGENDAR PELO WHATSAPP</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Location Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xs text-neutral-400 tracking-wider uppercase"
        >
          Jardim Guarujá — São Paulo, SP • Atendimento com Hora Marcada
        </motion.p>

      </div>
    </section>
  );
};
