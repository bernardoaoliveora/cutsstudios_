import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, PhoneCall, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/cutsData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Cortes', href: '#galeria' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cuts Club', href: '#cuts-club' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-[#C9A227] to-[#E7C75F]/40 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/img/logo.jpg"
                alt="CUTS STUDIOS Logo"
                className="h-full w-full object-cover rounded-full bg-[#0D0D0D]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg md:text-xl tracking-wider text-white group-hover:text-[#E7C75F] transition-colors">
                CUTS
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#C9A227] font-semibold -mt-1 uppercase">
                STUDIOS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-widest text-neutral-300 hover:text-[#E7C75F] transition-colors duration-200 font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] text-neutral-400 bg-[#0D0D0D] px-3 py-1.5 rounded-full border border-white/5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Jardim Guarujá, SP</span>
            </div>

            <button
              onClick={() => onOpenBooking()}
              data-cursor-hover
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#E7C75F] via-[#C9A227] to-[#E7C75F] bg-[length:200%_auto] rounded-full hover:bg-[position:right_center] transition-all duration-300 shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>AGENDAR HORÁRIO</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#E7C75F] to-[#C9A227] rounded-full shadow-md shadow-[#C9A227]/20 active:scale-95"
            >
              AGENDAR
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg bg-[#0D0D0D] border border-white/10"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#E7C75F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                  Ter a Dom: 09h às 19h
                </span>
                <span className="text-[#E7C75F] font-semibold">Thiago Menezes</span>
              </div>

              <div className="flex flex-col gap-3 my-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-base font-semibold tracking-wider text-neutral-200 hover:text-[#E7C75F] py-1 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#C9A227] opacity-60">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-[#050505] bg-gradient-to-r from-[#E7C75F] to-[#C9A227] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#C9A227]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>AGENDAR PELO WHATSAPP</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
