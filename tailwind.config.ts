import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          top: '#1E1B3A',
          midup: '#2E2B5F',
          middown: '#1A1733',
          bottom: '#0F0D22',
        },
        accent: {
          primary: '#6B7FFF',
          secondary: '#9B85FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
