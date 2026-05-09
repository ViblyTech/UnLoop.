'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { staggerContainer, fadeUpVariants } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Hold to UnLoop',
    description:
      "Press the button when the loop starts. Speak what's replaying in your head, or type it.",
  },
  {
    number: '02',
    title: 'AI guides you through',
    description:
      'A brief, structured conversation grounded in cognitive-behavioral research. Three to five turns. No fluff.',
  },
  {
    number: '03',
    title: 'The loop quiets',
    description:
      'You leave with a concrete pattern break and a quieter mind. The session takes 90 seconds, on average.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32">
      <Container>
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Ninety seconds to a quieter mind.
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="card-surface rounded-2xl p-8"
            >
              <div className="text-accent-primary text-sm font-mono mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
