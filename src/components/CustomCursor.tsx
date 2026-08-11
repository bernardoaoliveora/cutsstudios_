import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile touch screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('a, button, [data-cursor-hover], input, select');
      const cursorTextAttr = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (clickable) {
        setIsHovered(true);
        setHoverText(cursorTextAttr || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full border border-[#C9A227]/60 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 12),
          y: mousePosition.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered ? 'rgba(201, 162, 39, 0.15)' : 'transparent',
          borderColor: isHovered ? '#E7C75F' : 'rgba(201, 162, 39, 0.5)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.2
        }}
      >
        {hoverText && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[#E7C75F] tracking-tighter uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] h-1.5 w-1.5 rounded-full bg-[#E7C75F]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
        }}
      />
    </>
  );
};
