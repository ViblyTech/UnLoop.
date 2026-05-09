import { Container } from '@/components/shared/Container';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { PhoneFrame } from '@/components/shared/PhoneFrame';

const features = [
  {
    label: 'Voice mode',
    title: 'Talk to it like a friend who knows therapy.',
    description:
      'Hands-free voice conversations with an AI guide trained on cognitive-behavioral research. No typing, no apps to navigate. Just press, speak, and unload.',
    screenshot: '/screenshots/voice-mode.svg',
    reverse: false,
  },
  {
    label: 'Worry Drawer',
    title: 'Every loop, mapped over time.',
    description:
      "See the patterns in your thinking. Find out which worries actually came true (most don't). Watch your mind's noise quiet down week over week.",
    screenshot: '/screenshots/worry-drawer.svg',
    reverse: true,
  },
  {
    label: 'Thought Vault',
    title: 'Quiet specific recurring thoughts in 3 days.',
    description:
      'A structured 3-day program based on the 2023 Science Advances study on thought suppression training. Most users report measurable reduction in intrusion frequency by day three.',
    screenshot: '/screenshots/thought-vault.svg',
    reverse: false,
  },
  {
    label: 'Thought Flip',
    title: 'Retrain how your brain reads ambiguity.',
    description:
      'Cognitive Bias Modification game. Practice reading uncertain situations more flexibly. Eight short sessions across four weeks shifts your default interpretation.',
    screenshot: '/screenshots/thought-flip.svg',
    reverse: true,
  },
  {
    label: 'Sleep Mode',
    title: 'Calm your mind at the moment it matters most.',
    description:
      "Activates automatically at night. Body-based pattern breaks, slower pace, warmer voice. Designed for the 11pm spiral that won't let you sleep.",
    screenshot: '/screenshots/breathe-break.svg',
    reverse: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-32">
      <Container>
        <div className="text-center mb-32">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Built for the loop.
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature) => (
            <FadeInSection key={feature.label}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  feature.reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Phone */}
                <div className="flex justify-center">
                  <PhoneFrame
                    src={feature.screenshot}
                    alt={feature.title}
                    width={280}
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-4">
                    {feature.label}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
