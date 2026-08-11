import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { CUTS_CLUB, generateWhatsAppLink } from '../data/cutsData';

export const CutsClubSection: React.FC = () => {
  const handleClubSubscribe = () => {
    const message = `Olá Thiago! Tenho interesse no CUTS CLUB (Plano Mensal de R$ 120/mês) e gostaria de me tornar membro!`;
    const link = generateWhatsAppLink(undefined, undefined, undefined, message);
    window.open(link, '_blank');
  };

  return (
    <section id="cuts-club" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Metallic Gold Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A227]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#E7C75F] text-xs font-bold uppercase tracking-widest">
              <Crown className="w-4 h-4 fill-current" />
              <span>ASSINATURA EXCLUSIVA</span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-none">
              CUTS <span className="text-gold-gradient">CLUB</span>
            </h2>

            <p className="text-base text-neutral-300 font-normal leading-relaxed">
              Manter a régua em dia nunca foi tão prático. O plano mensal da CUTS STUDIOS foi criado para quem valoriza imagem pessoal, frequência e economia.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227]">
                SERVIÇOS INCLUSOS NO CLUBE:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CUTS_CLUB.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#0D0D0D] p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#E7C75F] shrink-0" />
                    <span className="text-xs font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                REGRAS DO PLANO:
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                {CUTS_CLUB.rules.map((rule) => (
                  <li key={rule} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Premium Club Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md bg-gradient-to-b from-[#141414] to-[#0A0A0A] rounded-3xl p-8 border-gold-glow relative shadow-2xl overflow-hidden"
            >
              {/* VIP Stamp watermark */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#C9A227]/10 flex items-center justify-center border border-[#C9A227]/20 pointer-events-none">
                <Crown className="w-16 h-16 text-[#C9A227]/20" />
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    PLANO MENSAL VIP
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    CUTS CLUB
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#E7C75F]">
                  <Crown className="w-6 h-6" />
                </div>
              </div>

              {/* Price Tag */}
              <div className="py-8 text-center border-b border-white/10">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading font-black text-5xl sm:text-6xl text-gold-gradient tracking-tight">
                    {CUTS_CLUB.priceFormatted}
                  </span>
                  <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                    / {CUTS_CLUB.period}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Economia e praticidade para o seu visual
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={handleClubSubscribe}
                  data-cursor-hover
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E7C75F] via-[#C9A227] to-[#E7C75F] bg-[length:200%_auto] text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-[#C9A227]/25 hover:shadow-[#C9A227]/40 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>{CUTS_CLUB.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
