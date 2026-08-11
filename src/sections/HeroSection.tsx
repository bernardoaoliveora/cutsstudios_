import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Sparkles, MapPin, Award, Star, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/cutsData';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 12;
        const y = (e.clientY / innerHeight - 0.5) * 12;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Apresentação Principal"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#050505] bg-noise max-w-full"
    >
      {/* Background Cinematic Gradient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] max-w-full bg-[#C9A227]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 max-w-full bg-[#E7C75F]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-8">
            
            {/* Live Operational Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0D0D0D] border border-white/10 backdrop-blur-md shadow-lg max-w-full"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E7C75F] truncate">
                ATENDIMENTO RESIDENCIAL VIP
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] sm:text-[11px] text-neutral-300 font-medium truncate">Jardim Guarujá, SP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-1 w-full"
            >
              <h1 className="font-heading font-black text-3xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.96] break-words">
                SEU CORTE. <br />
                <span className="text-gold-gradient">SUA IDENTIDADE.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl"
            >
              <p className="text-sm sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Atendimento personalizado, cortes precisos e degradês que valorizam a sua presença. Uma experiência reservada com o barbeiro <strong className="text-white font-semibold">Thiago Menezes</strong>.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2"
            >
              <button
                onClick={onOpenBooking}
                data-cursor-hover
                className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#E7C75F] via-[#C9A227] to-[#E7C75F] bg-[length:200%_auto] text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-[#C9A227]/25 hover:shadow-[#C9A227]/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>AGENDAR HORÁRIO</span>
              </button>

              <a
                href="#galeria"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full bg-[#0D0D0D] hover:bg-[#181818] text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-[0.2em] border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-all duration-300 text-center"
              >
                <span>VER CORTES</span>
              </a>
            </motion.div>

            {/* Key Differentiator Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg text-neutral-400"
            >
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl text-white">2023</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Barbeiro Desde</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl text-[#E7C75F]">DEGRADÊ</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Especialidade</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl text-white">100%</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Reservado</span>
              </div>
            </motion.div>
          </div>

          {/* Right Editorial Photography Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            <motion.div
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-[#C9A227]/40 via-white/10 to-transparent shadow-2xl shadow-black will-change-transform"
            >
              {/* Photo */}
              <div className="w-full h-full rounded-[22px] overflow-hidden relative group bg-[#0D0D0D]">
                <img
                  src="/img/thiago2.jpg"
                  alt="Barbeiro Thiago Menezes - CUTS STUDIOS"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />

                {/* Floating Tag */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xs sm:text-sm text-white">
                        THIAGO MENEZES
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#C9A227] font-medium">
                        Founder & Barber Studio
                      </p>
                    </div>
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#E7C75F] shrink-0">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#manifesto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-neutral-500 hover:text-[#E7C75F] transition-colors"
        aria-label="Rolar para o Manifesto"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold">SCROLL</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};
