import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">UnLoop</h3>
            <p className="text-sm text-white/60 max-w-xs">
              Break the loop. Quiet your mind. Research-backed AI for breaking
              repetitive negative thinking.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#features" className="text-white/70 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#science" className="text-white/70 hover:text-white">
                  Science
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/unloop/id6762386828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:Mikedeal@vibly.tech"
                  className="text-white/70 hover:text-white break-all"
                >
                  Mikedeal@vibly.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} UnLoop. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with care for anxious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
