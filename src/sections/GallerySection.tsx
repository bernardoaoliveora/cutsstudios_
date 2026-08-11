import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/cutsData';

interface GallerySectionProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectItem }) => {
  return (
    <section id="galeria" aria-label="Galeria de Cortes" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E7C75F] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFÓLIO REAL CUTS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              NOSSOS CORTES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-md">
              Precisão nos detalhes. Personalidade no resultado. Fotografias reais dos nossos clientes em Jardim Guarujá.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-semibold bg-[#0D0D0D] px-4 py-2 rounded-full border border-white/10 shrink-0">
            <Layers className="w-4 h-4 text-[#C9A227]" />
            <span>Clique nas imagens para explorar visão 360° (frente & costas)</span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Item 1: Cliente 1 (Main Feature) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => onSelectItem(GALLERY_ITEMS[0])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectItem(GALLERY_ITEMS[0]);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalhes do ${GALLERY_ITEMS[0].title}`}
            data-cursor-hover
            data-cursor-text="VER"
            className="md:col-span-7 group relative cursor-pointer rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-500 shadow-2xl focus-visible:ring-2 focus-visible:ring-[#E7C75F]"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
              <img
                src={GALLERY_ITEMS[0].frontImage}
                alt={GALLERY_ITEMS[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Tag & Number */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/75 backdrop-blur-md text-[#E7C75F] border border-white/15">
                  {GALLERY_ITEMS[0].badge}
                </span>
                <span className="font-heading font-extrabold text-xs text-neutral-400 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  01 // GALERIA
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#E7C75F] transition-colors">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    {GALLERY_ITEMS[0].subtitle}
                  </p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-[#C9A227] text-[#050505] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shrink-0">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Cliente 2 (Secondary Feature) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onClick={() => onSelectItem(GALLERY_ITEMS[1])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectItem(GALLERY_ITEMS[1]);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalhes do ${GALLERY_ITEMS[1].title}`}
            data-cursor-hover
            data-cursor-text="VER"
            className="md:col-span-5 group relative cursor-pointer rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-500 shadow-2xl focus-visible:ring-2 focus-visible:ring-[#E7C75F]"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] md:h-full overflow-hidden relative">
              <img
                src={GALLERY_ITEMS[1].frontImage}
                alt={GALLERY_ITEMS[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/75 backdrop-blur-md text-[#E7C75F] border border-white/15">
                  {GALLERY_ITEMS[1].badge}
                </span>
                <span className="font-heading font-extrabold text-xs text-neutral-400 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  02 // GALERIA
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#E7C75F] transition-colors">
                    {GALLERY_ITEMS[1].title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    {GALLERY_ITEMS[1].subtitle}
                  </p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-[#C9A227] text-[#050505] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shrink-0">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item 3: Manim Thiago (Full Width Bottom Process Banner) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => onSelectItem(GALLERY_ITEMS[2])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectItem(GALLERY_ITEMS[2]);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalhes dos ${GALLERY_ITEMS[2].title}`}
            data-cursor-hover
            data-cursor-text="VER"
            className="md:col-span-12 group relative cursor-pointer rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-[#C9A227]/50 transition-all duration-500 shadow-2xl mt-2 focus-visible:ring-2 focus-visible:ring-[#E7C75F]"
          >
            <div className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 md:p-10 overflow-hidden">
              <img
                src={GALLERY_ITEMS[2].frontImage}
                alt={GALLERY_ITEMS[2].title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#050505] via-[#050505]/85 sm:via-[#050505]/70 to-[#050505]/30 sm:to-transparent opacity-95 pointer-events-none" />

              {/* Text Badge */}
              <div className="relative z-10 flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#C9A227] text-[#050505]">
                  BASTIDORES & ATENDIMENTO
                </span>
                <span className="text-xs font-semibold text-neutral-300 sm:text-neutral-400">
                  Thiago Menezes em ação
                </span>
              </div>

              <div className="relative z-10 max-w-2xl mt-8 sm:mt-0">
                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white group-hover:text-[#E7C75F] transition-colors uppercase tracking-tight leading-tight">
                  {GALLERY_ITEMS[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed max-w-xl">
                  Cada ajuste de máquina e tesoura é realizado para valorizar a simetria única do seu formato de rosto.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
