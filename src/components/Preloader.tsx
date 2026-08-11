import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1.2s timer for sleek minimalist reveal
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400); // Allow fade animation to finish
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Ambient Gold Glow */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.35 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute -inset-10 rounded-full bg-[#C9A227]/20 blur-3xl"
            />

            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 overflow-hidden rounded-full p-[2px] bg-gradient-to-b from-[#E7C75F] via-[#C9A227] to-[#050505]"
            >
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden bg-[#0D0D0D] flex items-center justify-center p-1">
                <img
                  src="/img/logo.jpg"
                  alt="CUTS STUDIOS"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center tracking-widest"
            >
              <h1 className="font-heading text-2xl md:text-3xl font-extrabold text-white tracking-[0.25em]">
                CUTS
              </h1>
              <p className="text-[10px] md:text-xs text-[#C9A227] tracking-[0.4em] uppercase font-semibold mt-1">
                BARBER STUDIO
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="w-36 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="h-full w-full bg-gradient-to-r from-[#C9A227] via-[#E7C75F] to-[#C9A227]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
