import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Page backgrounds
        canvas: '#FAFAF8',
        surface: '#F0EEE9',
        // Borders and dividers
        border: {
          DEFAULT: '#E0DED8',
          strong: '#C8C5BE',
        },
        // Text
        ink: {
          primary: '#19181A',
          secondary: '#65605A',
          // subtle: accessible label/eyebrow color (~4.97:1 on canvas) — use instead of
          // ink-muted for any text that conveys information (eyebrow labels, captions, etc.)
          subtle: '#706B65',
          muted: '#9A958F', // decorative only — fails WCAG AA, do not use for informational text
          inverse: '#FAFAF8',
        },
        // Brand accent — dark forest green, used sparingly
        accent: {
          DEFAULT: '#1C5C3A',
          light: '#2D7A52',
          dark: '#123D26',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(2.5rem, 5vw, 4rem)',
          { lineHeight: '1.08', letterSpacing: '-0.025em' },
        ],
        h1: [
          'clamp(2rem, 4vw, 3rem)',
          { lineHeight: '1.12', letterSpacing: '-0.02em' },
        ],
        h2: [
          'clamp(1.625rem, 3vw, 2.25rem)',
          { lineHeight: '1.2', letterSpacing: '-0.015em' },
        ],
        h3: [
          'clamp(1.125rem, 2vw, 1.375rem)',
          { lineHeight: '1.35', letterSpacing: '-0.01em' },
        ],
      },
      maxWidth: {
        content: '72rem',
        narrow: '48rem',
        prose: '65ch',
      },
      spacing: {
        section: '7rem',
        'section-sm': '4.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
