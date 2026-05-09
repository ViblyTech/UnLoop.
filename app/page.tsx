import { GradientBackground } from '@/components/shared/GradientBackground';
import { StarryBackground } from '@/components/shared/StarryBackground';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Problem } from '@/components/home/Problem';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Features } from '@/components/home/Features';
import { Science } from '@/components/home/Science';
import { DownloadCTA } from '@/components/home/DownloadCTA';

export default function Home() {
  return (
    <>
      <GradientBackground />
      <StarryBackground />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Science />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
