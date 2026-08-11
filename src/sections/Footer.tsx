import React from 'react';
import { Instagram, MessageSquare, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO, generateWhatsAppLink } from '../data/cutsData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#050505] text-neutral-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-[#C9A227] to-[#E7C75F]">
                <img src="/img/logo.jpg" alt="CUTS STUDIOS Logo" className="h-full w-full object-cover rounded-full bg-[#0D0D0D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-white">CUTS STUDIOS</span>
                <span className="text-[9px] tracking-[0.25em] text-[#C9A227] font-semibold uppercase">BARBER STUDIO</span>
              </div>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Atendimento residencial exclusivo com Thiago Menezes. Cortes masculinos de alta precisão e degradês sob medida.
            </p>
          </div>

          {/* Hours & Location */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              FUNCIONAMENTO & LOCAL
            </h4>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9A227]" />
              <span>Terça a Domingo: 09:00 — 19:00 (Segunda: Fechado)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <span>Rua Pandalhos, 1012 — Jardim Guarujá, São Paulo</span>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="md:col-span-4 space-y-3 text-xs md:text-right">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              CONECTE-SE
            </h4>
            <div className="flex items-center md:justify-end gap-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#0D0D0D] border border-white/10 hover:border-[#C9A227] flex items-center justify-center text-white hover:text-[#E7C75F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenBooking}
                className="h-10 w-10 rounded-full bg-[#0D0D0D] border border-white/10 hover:border-[#C9A227] flex items-center justify-center text-white hover:text-[#E7C75F] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 CUTS STUDIOS. Todos os direitos reservados.</p>
          <p className="text-[11px]">Thiago Menezes • Barber Studio</p>
        </div>
      </div>
    </footer>
  );
};
