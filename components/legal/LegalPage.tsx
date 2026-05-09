import { Container } from '@/components/shared/Container';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            {title}
          </h1>
          <p className="text-sm text-white/40 mb-16">
            Last updated: {lastUpdated}
          </p>
          <div className="prose-invert max-w-none">
            <div className="space-y-6 text-white/80 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
