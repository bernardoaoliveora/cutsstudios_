import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, RotateCw } from 'lucide-react';
import { GalleryItem } from '../data/cutsData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookCut: (serviceName?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBookCut }) => {
  const [activeAngle, setActiveAngle] = useState<'front' | 'back'>('front');

  useEffect(() => {
    setActiveAngle('front');
  }, [item]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && item) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const hasBackImage = Boolean(item.backImage);
  const currentImageUrl = activeAngle === 'front' ? item.frontImage : item.backImage || item.frontImage;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria 360 - ${item.title}`}
        className="fixed inset-0 z-[100] overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 backdrop-blur-xl"
        />

        {/* Centered Scrollable Wrapper */}
        <div className="min-h-full flex items-start sm:items-center justify-center p-3.5 sm:p-6 py-6 sm:py-8">
          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 my-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-black/80 text-white/90 hover:text-white hover:bg-black border border-white/20 backdrop-blur-md transition-colors focus-visible:ring-2 focus-visible:ring-[#E7C75F]"
              aria-label="Fechar visualizador de imagem"
            >
              <X className="w-5 h-5" />
            </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Preview Container */}
            <div className="lg:col-span-8 relative bg-[#050505] flex items-center justify-center min-h-[380px] sm:min-h-[500px] overflow-hidden group">
              <motion.img
                key={currentImageUrl}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={currentImageUrl}
                alt={`${item.title} - Visão ${activeAngle === 'front' ? 'Frontal' : 'Posterior (Costas)'}`}
                className="w-full h-full max-h-[70vh] object-contain p-2"
              />

              {/* Angle Switcher Controls (Front / Back) */}
              {hasBackImage && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 p-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 shadow-2xl">
                  <span className="text-[10px] font-bold text-neutral-400 pl-3 uppercase tracking-wider flex items-center gap-1">
                    <RotateCw className="w-3 h-3 text-[#C9A227]" />
                    Ângulo:
                  </span>
                  <button
                    onClick={() => setActiveAngle('front')}
                    className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                      activeAngle === 'front'
                        ? 'bg-[#C9A227] text-[#050505] shadow-lg'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    FRENTE
                  </button>
                  <button
                    onClick={() => setActiveAngle('back')}
                    className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                      activeAngle === 'back'
                        ? 'bg-[#C9A227] text-[#050505] shadow-lg'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    COSTAS
                  </button>
                </div>
              )}
            </div>

            {/* Side Details */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0A0A0A]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#C9A227]/15 text-[#E7C75F] border border-[#C9A227]/30 mb-3">
                  {item.badge}
                </span>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.subtitle}
                </p>

                {/* Technical details list */}
                {item.details && (
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-wider block mb-2">
                      ESPECIFICAÇÕES TÉCNICAS:
                    </span>
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E7C75F] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Estilo:</span>
                    <span className="text-white font-semibold">{item.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Barbeiro:</span>
                    <span className="text-[#E7C75F] font-semibold">Thiago Menezes</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Local:</span>
                    <span className="text-white font-medium">Jardim Guarujá, SP</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    onBookCut("Corte Navalhado");
                  }}
                  className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#E7C75F] to-[#C9A227] text-[#050505] font-extrabold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span>AGENDAR CORTE COMO ESTE</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatePresence>
);
};
