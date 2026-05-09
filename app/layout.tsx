import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UnLoop — Break the loop. Quiet your mind.',
  description:
    'AI-guided brief interventions for repetitive negative thinking. Research-backed mental health support that fits in your pocket.',
  metadataBase: new URL('https://unloop.app'),
  openGraph: {
    title: 'UnLoop',
    description: 'Break the loop. Quiet your mind.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnLoop',
    description: 'Break the loop. Quiet your mind.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-white">{children}</body>
    </html>
  );
}
