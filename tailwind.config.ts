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
        /* Premium Italian Restaurant Palette */
        'pizza': {
          50: '#faf6f1',
          100: '#f5ede3',
          200: '#ecd9c8',
          300: '#ddb899',
          400: '#ce9567',
          500: '#c87d42',
          600: '#b8613a',
          700: '#8f4723',
          800: '#713a1d',
          900: '#5c2f17',
        },
        'wine': {
          50: '#faf6f6',
          100: '#f5e5e5',
          200: '#edcccc',
          300: '#d9a0a0',
          400: '#c25454',
          500: '#a63d3d',
          600: '#943333',
          700: '#7d2020',
          800: '#6b1a1a',
          900: '#551111',
        },
        'olive': {
          50: '#faf9f2',
          100: '#f3f0e0',
          200: '#e8e2c0',
          300: '#d4c899',
          400: '#b5a66b',
          500: '#9a8f4d',
          600: '#7d7540',
          700: '#5f5a2f',
          800: '#4a4624',
          900: '#3a371c',
        },
        'cream': {
          50: '#fffbf8',
          100: '#fff5ed',
          200: '#ffe8d6',
          300: '#fdd4a8',
          400: '#fcb86d',
          500: '#f9a04d',
          600: '#f0843b',
          700: '#d86b2c',
          800: '#b85525',
          900: '#934620',
        },
        'gold': {
          50: '#fffbf0',
          100: '#fff7e0',
          200: '#ffecc3',
          300: '#ffd699',
          400: '#ffc266',
          500: '#ffb84d',
          600: '#f0a024',
          700: '#d48b1a',
          800: '#b87316',
          900: '#935a10',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px rgba(255, 184, 77, 0.15)',
      },
      backdropFilter: {
        glass: 'blur(10px)',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, rgba(200, 125, 66, 0.1) 0%, rgba(166, 61, 61, 0.05) 100%)',
        'gradient-warm': 'linear-gradient(180deg, #c87d42 0%, #8f4723 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' seed=\'2\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 184, 77, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 184, 77, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
