import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/cutsData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141414] via-[#0D0D0D] to-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* Left Info */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" />
              <span>SIGA NO INSTAGRAM</span>
            </div>

            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              {BRAND_INFO.instagramHandle}
            </h3>

            <p className="text-neutral-400 text-sm max-w-md">
              Acompanhe novidades, transformações de visual diárias, bastidores e avisos de horários no nosso perfil oficial.
            </p>
          </div>

          {/* Right CTA */}
          <div className="shrink-0">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E7C75F] to-[#C9A227] text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] flex items-center gap-3 shadow-xl shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>VER INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
