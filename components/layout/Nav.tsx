'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-bottom/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          UnLoop
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/#features"
            className="hidden md:inline text-sm text-white/70 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#science"
            className="hidden md:inline text-sm text-white/70 hover:text-white transition-colors"
          >
            Science
          </Link>
          <a
            href="https://apps.apple.com/app/unloop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full bg-accent-primary hover:bg-accent-primary/90 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
