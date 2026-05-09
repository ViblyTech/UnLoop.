'use client';

import { motion } from 'framer-motion';
import { Orb } from '@/components/shared/Orb';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
                Now on iOS
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Break the loop.
                <br />
                <span className="gradient-text">Quiet your mind.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                AI-guided brief interventions for repetitive negative thinking.
                Research-backed mental health support that fits in your pocket.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/app/unloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-all hover:scale-[1.02] font-medium"
                >
                  Download for iOS
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-medium"
                >
                  How it works
                </a>
              </div>
            </motion.div>
          </div>

          {/* Orb */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            <Orb size={360} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
