import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003527',
        'primary-container': '#064e3b',
        'primary-fixed-dim': '#95d3ba',
        'primary-fixed': '#b0f0d6',
        'tertiary-fixed-dim': '#4edea3',
        'tertiary-fixed': '#6ffbbe',
        'tertiary-container': '#004f34',
        surface: '#fcf9f8',
        'surface-container-low': '#f6f3f2',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#eae7e7',
        'surface-container-highest': '#e5e2e1',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#404944',
        'outline-variant': '#bfc9c3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
