import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Clock, MessageSquare, ShieldCheck, ArrowRight, Plus, Trash2 } from 'lucide-react';
import { SERVICES, generateWhatsAppLink, ServiceItem } from '../data/cutsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      if (initialServiceId) {
        const found = SERVICES.find((s) => s.id === initialServiceId || s.name === initialServiceId);
        if (found) {
          setSelectedServices([found]);
        } else {
          setSelectedServices([SERVICES[1]]); // Default Corte Navalhado
        }
      } else if (selectedServices.length === 0) {
        setSelectedServices([SERVICES[1]]);
      }
    }
  }, [initialServiceId, isOpen]);

  const toggleService = (service: ServiceItem) => {
    const exists = selectedServices.some((s) => s.id === service.id);
    if (exists) {
      // Don't deselect if it's the only one selected
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const filteredServices = SERVICES.filter((s) => {
    if (categoryFilter === 'all') return true;
    return s.category === categoryFilter;
  });

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const servicesTextFormatted = selectedServices
    .map((s) => `${s.name} (${s.priceFormatted})`)
    .join(', ');

  const formattedDate = preferredDate ? preferredDate.split('-').reverse().join('/') : '';

  const generatedWhatsAppLink = generateWhatsAppLink(
    `${servicesTextFormatted} | Total: R$ ${totalPrice}`,
    formattedDate,
    preferredTime
  );

  const handleWhatsAppRedirect = () => {
    window.open(generatedWhatsAppLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-[100] overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Centered Scrollable Wrapper */}
          <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 py-6 sm:py-8">
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-auto"
            >
              {/* Ambient Gold Ambient Gradient */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-56 h-56 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between pb-4 sm:pb-5 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3 sm:gap-3.5 pr-2">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center text-[#E7C75F] shadow-inner shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 id="booking-modal-title" className="font-heading font-extrabold text-lg sm:text-2xl text-white tracking-tight">
                      AGENDAR HORÁRIO
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                      CUTS STUDIOS • Atendimento Residencial Exclusivo
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 sm:p-2.5 text-neutral-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#E7C75F] shrink-0"
                  aria-label="Fechar modal de agendamento"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

            {/* Step 1: Category Filter & Multi-Service Selection */}
            <div className="mt-6 space-y-6 relative z-10">
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#E7C75F] flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#C9A227] text-[#050505] text-[10px] font-black flex items-center justify-center">1</span>
                    Selecione um ou mais Serviços
                    <span className="text-[10px] font-normal text-neutral-400 normal-case">
                      ({selectedServices.length} {selectedServices.length === 1 ? 'selecionado' : 'selecionados'})
                    </span>
                  </label>

                  {/* Category Filter Pills */}
                  <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-lg border border-white/5 text-[10px]">
                    {[
                      { id: 'all', label: 'Todos' },
                      { id: 'corte', label: 'Cortes' },
                      { id: 'combo', label: 'Combos' },
                      { id: 'detalhes', label: 'Detalhes' },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategoryFilter(cat.id)}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                          categoryFilter === cat.id
                            ? 'bg-[#C9A227] text-[#050505]'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Services Checkboxes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {filteredServices.map((service) => {
                    const isSelected = selectedServices.some((s) => s.id === service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#C9A227]/15 border-[#E7C75F] text-white shadow-md shadow-[#C9A227]/10'
                            : 'bg-[#121212] border-white/5 text-neutral-400 hover:border-white/20 hover:bg-[#181818] hover:text-neutral-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'border-[#E7C75F] bg-[#E7C75F] text-[#050505]'
                                : 'border-neutral-600 bg-white/5'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold block leading-tight">{service.name}</span>
                            <span className="text-[10px] text-neutral-400">{service.duration}</span>
                          </div>
                        </div>
                        <span className={`text-xs font-black ${isSelected ? 'text-[#E7C75F]' : 'text-neutral-300'}`}>
                          {service.priceFormatted}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Total Summary Pill */}
                <div className="mt-3 flex items-center justify-between p-3 rounded-xl bg-[#121212] border border-white/5 text-xs">
                  <span className="text-neutral-400">
                    Total Estimado ({selectedServices.length} {selectedServices.length === 1 ? 'item' : 'itens'}):
                  </span>
                  <span className="font-heading font-black text-sm text-gold-gradient">
                    R$ {totalPrice}
                  </span>
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="pt-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#E7C75F] flex items-center gap-2 mb-3">
                  <span className="h-5 w-5 rounded-full bg-[#C9A227] text-[#050505] text-[10px] font-black flex items-center justify-center">2</span>
                  Data & Horário Preferencial <span className="text-[10px] text-neutral-400 font-normal lowercase">(opcional)</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="date"
                      aria-label="Data preferencial"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      aria-label="Horário preferencial"
                      placeholder="Ex: 15h ou Período da tarde"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Live Message Preview Box */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-neutral-300 space-y-1">
                <div className="flex items-center gap-2 text-[#E7C75F] font-semibold text-[11px] uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Mensagem Formatada para o Barbeiro:</span>
                </div>
                <p className="text-[11px] font-mono text-neutral-400 leading-relaxed pl-5 italic">
                  "Olá! Vim pelo site da CUTS STUDIOS e gostaria de agendar um horário.
                  {selectedServices.length > 0 && ` Serviços: ${servicesTextFormatted} | Total: R$ ${totalPrice}`}
                  {formattedDate && ` | Data: ${formattedDate}`}
                  {preferredTime && ` | Horário: ${preferredTime}`}"
                </p>
              </div>

              {/* Submit CTA */}
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#E7C75F] via-[#C9A227] to-[#E7C75F] bg-[length:200%_auto] text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-[#C9A227]/25 hover:shadow-[#C9A227]/40 hover:scale-[1.01] active:scale-95 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>AGENDAR {selectedServices.length} {selectedServices.length === 1 ? 'SERVIÇO' : 'SERVIÇOS'} (R$ {totalPrice}) NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )}
  </AnimatePresence>
);
};
