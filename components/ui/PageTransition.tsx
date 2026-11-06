'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Mask-wipe page transition.
 *
 * The outgoing/incoming page is revealed by an inset clip-path rather than a
 * slide, so it reads as one continuous surface with the WaveField behind it.
 * Reduced-motion users get an instant, opacity-only swap.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'inset(6% 0% 100% 0%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'clip-path, opacity' }}
    >
      {children}
    </motion.div>
  );
}
