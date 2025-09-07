import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Cyberpunk colors
        'cyber-black': '#0a0a0a',
        'cyber-dark': '#121212',
        'cyber-gray': '#1e1e1e',
        'cyber-light': '#2a2a2a',
        'cyber-pink': '#ff2a6d',
        'cyber-blue': '#05d9e8',
        'cyber-purple': '#9d4edd',
        'cyber-green': '#39ff14',
        'cyber-yellow': '#f9c80e',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 1.5s ease-in-out infinite',
        'flicker': 'flicker 0.5s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #05d9e8, 0 0 10px #05d9e8' },
          '100%': { textShadow: '0 0 10px #05d9e8, 0 0 20px #05d9e8, 0 0 30px #05d9e8' },
        },
        scan: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(5, 217, 232, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 217, 232, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(to right, #ff2a6d, #05d9e8)',
      },
      boxShadow: {
        'neon-pink': '0 0 5px #ff2a6d, 0 0 10px #ff2a6d',
        'neon-blue': '0 0 5px #05d9e8, 0 0 10px #05d9e8',
        'neon-purple': '0 0 5px #9d4edd, 0 0 10px #9d4edd',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14',
      },
      textShadow: {
        'neon-pink': '0 0 5px #ff2a6d, 0 0 10px #ff2a6d',
        'neon-blue': '0 0 5px #05d9e8, 0 0 10px #05d9e8',
        'neon-purple': '0 0 5px #9d4edd, 0 0 10px #9d4edd',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px #ff2a6d, 0 0 10px #ff2a6d',
        },
        '.text-shadow-neon-blue': {
          textShadow: '0 0 5px #05d9e8, 0 0 10px #05d9e8',
        },
        '.text-shadow-neon-purple': {
          textShadow: '0 0 5px #9d4edd, 0 0 10px #9d4edd',
        },
        '.text-shadow-neon-green': {
          textShadow: '0 0 5px #39ff14, 0 0 10px #39ff14',
        },
        '.clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
