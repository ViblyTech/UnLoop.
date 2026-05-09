import { Container } from '@/components/shared/Container';
import { FadeInSection } from '@/components/shared/FadeInSection';

const studies = [
  {
    citation: 'Stenzel et al. (2025)',
    finding:
      'Meta-analysis of 55 RCTs: targeted CBT for repetitive negative thinking shows large effect size (d=0.99).',
  },
  {
    citation: 'Mamat et al. (2023)',
    finding:
      'Science Advances: 3-day thought suppression training reduces intrusion vividness, with effects sustained at 3-month follow-up.',
  },
  {
    citation: 'Ferrari et al. (2019)',
    finding:
      'Self-compassion interventions show among the largest effect sizes for reducing rumination (g=1.37).',
  },
  {
    citation: 'Hirsch et al. (2018, 2020)',
    finding:
      'Cognitive Bias Modification for Interpretation: shifts automatic reading of ambiguous situations.',
  },
];

export function Science() {
  return (
    <section id="science" className="py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
            The science
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            Every feature has a citation.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            We don&apos;t make up wellness practices. UnLoop is built on
            peer-reviewed clinical research from leading mental health
            laboratories worldwide.
          </p>
        </div>

        <FadeInSection className="grid md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <div key={study.citation} className="card-surface rounded-2xl p-8">
              <p className="text-sm text-accent-primary font-mono mb-3">
                {study.citation}
              </p>
              <p className="text-white/80 leading-relaxed">{study.finding}</p>
            </div>
          ))}
        </FadeInSection>
      </Container>
    </section>
  );
}
