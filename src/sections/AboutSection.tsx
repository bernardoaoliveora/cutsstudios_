import React from 'react';
import { motion } from 'framer-motion';
import { Award, Scissors, Sparkles, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/cutsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo of Thiago */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-[#C9A227]/40 via-white/10 to-transparent shadow-2xl"
            >
              <img
                src="/img/thiago2.jpg"
                alt="Thiago Menezes - Barbeiro da CUTS STUDIOS"
                className="w-full h-full object-cover rounded-[22px] object-top"
              />
              <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D0D0D]/90 backdrop-blur-md border border-white/10">
                <span className="text-[10px] text-[#C9A227] font-bold tracking-widest uppercase">
                  FUNDADOR & BARBEIRO
                </span>
                <h4 className="font-heading font-extrabold text-xl text-white">
                  THIAGO MENEZES
                </h4>
                <p className="text-xs text-neutral-400">
                  Barbeiro profissional atuante desde 2023
                </p>
              </div>
            </motion.div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#E7C75F] text-xs font-bold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5" />
              <span>POR TRÁS DA CUTS</span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              THIAGO MENEZES
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Atuando como barbeiro profissional desde 2023, Thiago Menezes desenvolveu a CUTS STUDIOS com o compromisso de entregar uma experiência de corte moderna, precisa e totalmente centrada nas preferências de cada cliente.
            </p>

            {/* Three Main Pillars */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                OS PILARES DE TRABALHO:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-1">
                  <span className="font-heading font-bold text-base text-white block">
                    01. ATENDIMENTO
                  </span>
                  <p className="text-xs text-neutral-400">
                    Respeito ao horário, escuta ativa e dedicação exclusiva.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-1">
                  <span className="font-heading font-bold text-base text-white block">
                    02. CORTE
                  </span>
                  <p className="text-xs text-neutral-400">
                    Técnica afiada na tesoura e máquina com simetria.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-1">
                  <span className="font-heading font-bold text-base text-[#E7C75F] block">
                    03. DEGRADÊ
                  </span>
                  <p className="text-xs text-neutral-400">
                    Transição de tons impecável e acabamento navalhado.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
