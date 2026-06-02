import { Container } from '@/components/shared/Container';
import { FadeInSection } from '@/components/shared/FadeInSection';

export function DownloadCTA() {
  return (
    <section className="py-32">
      <Container>
        <FadeInSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Ready to break the loop?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
            Download UnLoop free. Try the basics with no account required.
            Upgrade only when you&apos;re sure it works for you.
          </p>
          <a
            href="https://apps.apple.com/us/app/unloop/id6762386828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-all hover:scale-[1.02] text-lg font-medium"
          >
            Download for iOS
          </a>
        </FadeInSection>
      </Container>
    </section>
  );
}
