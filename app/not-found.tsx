import Link from 'next/link';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { StarryBackground } from '@/components/shared/StarryBackground';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/shared/Container';
import { Orb } from '@/components/shared/Orb';

export const metadata = {
  title: 'Page not found — UnLoop',
};

export default function NotFound() {
  return (
    <>
      <GradientBackground />
      <StarryBackground />
      <Nav />
      <main className="min-h-screen flex items-center pt-20 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-12">
              <Orb size={200} />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-secondary mb-6">
              404
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-6">
              Lost in thought?
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. Take a breath
              and head back home.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-all hover:scale-[1.02] font-medium"
            >
              Back home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
