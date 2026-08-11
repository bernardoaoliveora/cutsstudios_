import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Phone, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/cutsData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
            ONDE ESTAMOS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            LOCALIZAÇÃO & HORÁRIOS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Ambiente residencial preparado no bairro Jardim Guarujá, São Paulo — SP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Location Info Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 shadow-xl">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#050505] border border-white/5">
                <div className="h-10 w-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#E7C75F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    ENDEREÇO
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    {BRAND_INFO.address}
                  </p>
                  <span className="text-[11px] text-[#C9A227] font-medium block mt-1">
                    Jardim Guarujá — São Paulo / SP
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#050505] border border-white/5">
                <div className="h-10 w-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#E7C75F] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-heading font-bold text-base text-white mb-2">
                    HORÁRIO DE ATENDIMENTO
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-neutral-300">
                      <span>Terça a Domingo:</span>
                      <strong className="text-[#E7C75F]">09:00 — 19:00</strong>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Segunda-feira:</span>
                      <span className="text-red-400 font-semibold">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Directions CTA */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E7C75F] to-[#C9A227] text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>COMO CHEGAR (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Right Map Preview */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 min-h-[350px] shadow-2xl relative">
            <iframe
              title="CUTS STUDIOS Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123!2d-46.745!3d-23.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce526012345679%3A0x123456789abcdef!2sRua%20Pandalhos%2C%201012%20-%20Jardim%20Guaruj%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.9) invert(0.9) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
