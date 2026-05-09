'use client';

import { motion } from 'framer-motion';

export function Orb({ size = 280 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(107,127,255,0.4) 0%, rgba(107,127,255,0) 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb body */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: '60%',
          height: '60%',
          background:
            'radial-gradient(circle at 30% 30%, #9B85FF 0%, #6B7FFF 60%, #4A5FC4 100%)',
          boxShadow: `
            0 0 80px rgba(107, 127, 255, 0.6),
            0 0 40px rgba(155, 133, 255, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.2)
          `,
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Inner highlight */}
      <div
        className="absolute rounded-full"
        style={{
          width: '20%',
          height: '20%',
          top: '25%',
          left: '25%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
