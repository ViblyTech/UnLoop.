'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
