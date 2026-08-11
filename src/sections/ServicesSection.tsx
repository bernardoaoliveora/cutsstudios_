import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/cutsData';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="servicos" className="py-24 bg-[#0D0D0D] relative border-t border-white/5">
      {/* Glow background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold block mb-2">
              TABELA DE VALORES
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              SERVIÇOS
            </h2>
          </div>

          <p className="text-neutral-400 text-sm max-w-md">
            Atendimento residencial exclusivo, sem filas e com padrão máximo de qualidade em cada detalhe.
          </p>
        </div>

        {/* Editorial Table List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onOpenBooking(service.name)}
              data-cursor-hover
              data-cursor-text="AGENDAR"
              className="group py-6 sm:py-8 px-2 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:bg-white/[0.02] cursor-pointer relative overflow-hidden"
            >
              {/* Left Highlight Bar on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start sm:items-center gap-6">
                <span className="font-heading text-xs font-bold text-[#C9A227] tracking-wider w-6">
                  {service.number}
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-bold text-lg sm:text-2xl text-white group-hover:text-[#E7C75F] transition-colors">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#C9A227]/20 text-[#E7C75F] border border-[#C9A227]/30">
                        DESTAQUE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 mt-2 sm:mt-0">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#E7C75F] tracking-tight">
                  {service.priceFormatted}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking(service.name);
                  }}
                  className="h-10 px-4 rounded-full bg-white/5 group-hover:bg-[#C9A227] text-white group-hover:text-[#050505] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                >
                  <span>AGENDAR</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C9A227]" />
            <span className="text-xs text-neutral-300 font-medium">
              Precisa de um combo personalizado ou horário especial?
            </span>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="text-xs font-bold text-[#E7C75F] hover:underline uppercase tracking-wider flex items-center gap-1"
          >
            Fale diretamente com o Thiago →
          </button>
        </div>

      </div>
    </section>
  );
};
