import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bureau & monitor (skeuomorf)
        desk: '#27241d',
        bezel: { DEFAULT: '#d9cfb6', dark: '#b3a888', light: '#efe7d1' },
        // Bureaublad (wallpaper)
        screen: { DEFAULT: '#12525c', deep: '#0b3a42', glow: '#1c6c78' },
        // Papier / vensters
        paper: { DEFAULT: '#f6eed9', dark: '#e8dcbf', line: '#d8c9a3' },
        ink: { DEFAULT: '#221d14', soft: '#5c5238' },
        // Accent uit het ontwikkelcanvas (oranje/geel)
        accent: { DEFAULT: '#ef8a2b', light: '#f6b13c', dark: '#cf6f18' },
        retroblue: '#1f3a5f',
      },
      fontFamily: {
        pixel: ['Silkscreen', 'monospace'],
        crt: ['VT323', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        // Klassieke "uitgestoken" 3D-rand (light boven/links, dark onder/rechts)
        bevel: 'inset 2px 2px 0 0 rgba(255,255,255,0.7), inset -2px -2px 0 0 rgba(0,0,0,0.35)',
        'bevel-in': 'inset -2px -2px 0 0 rgba(255,255,255,0.55), inset 2px 2px 0 0 rgba(0,0,0,0.35)',
        window: '6px 6px 0 0 rgba(0,0,0,0.35)',
        icon: '3px 3px 0 0 rgba(0,0,0,0.25)',
      },
      keyframes: {
        'window-in': {
          '0%': { transform: 'scale(0.96) translateY(6px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        flicker: {
          '0%,100%': { opacity: '0.06' },
          '50%': { opacity: '0.10' },
        },
      },
      animation: {
        'window-in': 'window-in 0.16s ease-out',
        blink: 'blink 1s step-end infinite',
        flicker: 'flicker 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
