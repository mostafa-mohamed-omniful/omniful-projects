import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

// Rises into place once as it enters the viewport; `order` staggers siblings by 75ms.
// Under reduced motion the content is simply there.
export const Reveal = ({ children, order = 0, className }: { children: ReactNode; order?: number; className?: string }) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: order * 0.075, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};
