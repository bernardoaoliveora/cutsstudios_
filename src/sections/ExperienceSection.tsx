import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Sparkles, SlidersHorizontal, HeartHandshake } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Atendimento Individual",
      description: "Sem filas de espera, sem barulho excessivo. O horário agendado é 100% exclusivo para você."
    },
    {
      icon: ShieldCheck,
      title: "Ambiente Reservado",
      description: "Um espaço residencial moderno, higienizado e aconchegante para você relaxar enquanto cuida do seu estilo."
    },
    {
      icon: SlidersHorizontal,
      title: "Atenção Extrema aos Detalhes",
      description: "Cada fio de cabelo, alinhamento de sobrancelha e linha de degradê recebe cuidado artesanal."
    },
    {
      icon: HeartHandshake,
      title: "Proximidade & Confiança",
      description: "Relacionamento de transparência com o barbeiro Thiago Menezes para entender exatamente o seu objetivo."
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Statement Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
            EXCLUSIVIDADE & PRIVACIDADE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
            UM ATENDIMENTO MAIS PRÓXIMO. <br />
            <span className="text-gold-gradient">MAIS RESERVADO. MAIS PERSONALIZADO.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            O conceito da CUTS STUDIOS une a conveniência do atendimento residencial com o padrão de acabamento das melhores barbearias da capital.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#050505] border border-white/5 hover:border-[#C9A227]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="h-12 w-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#E7C75F] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-[#E7C75F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
