import { Container } from '@/components/shared/Container';
import { FadeInSection } from '@/components/shared/FadeInSection';

export function Problem() {
  return (
    <section className="py-32">
      <Container>
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
            The problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
            Your mind has a loop.{' '}
            <span className="text-white/60">It&apos;s not your fault.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            That same thought, replaying for the third time today. The
            conversation you can&apos;t stop reviewing. The future you can&apos;t stop
            forecasting. The worry that won&apos;t land.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Repetitive negative thinking is the engine behind anxiety,
            depression, and insomnia. It&apos;s also one of the most studied
            phenomena in clinical psychology — and one of the most treatable.
          </p>
        </FadeInSection>
      </Container>
    </section>
  );
}
