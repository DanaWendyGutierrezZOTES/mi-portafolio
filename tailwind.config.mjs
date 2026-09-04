/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#060911',
        surface: '#0c1220',
        'surface-card': '#10182b',
        'surface-card-hover': '#16223d',
        'surface-border': '#1e2d4d',
        'surface-border-subtle': 'rgba(255, 255, 255, 0.08)',
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          DEFAULT: '#06b6d4'
        },
        academic: {
          light: '#38bdf8',
          DEFAULT: '#0284c7',
          dark: '#0369a1',
          border: '#0ea5e9'
        },
        personal: {
          light: '#fb7185',
          DEFAULT: '#f43f5e',
          dark: '#e11d48',
          border: '#f43f5e'
        },
        accent: {
          purple: '#a855f7',
          amber: '#f59e0b',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-academic': '0 0 25px -5px rgba(2, 132, 199, 0.35)',
        'glow-personal': '0 0 25px -5px rgba(244, 63, 94, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
