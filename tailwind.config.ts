import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
        },
        accent: '#f472b6',
        dark: {
          DEFAULT: '#1a1b1e',
          card: '#25262b',
        },
        light: {
          DEFAULT: '#ffffff',
          card: '#f8f9fa',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        sans: ['var(--font-kufi)'],
        kufi: ['var(--font-kufi)'],
        arabic: ['var(--font-amiri)'],
      },
      animation: {
        shine: 'shine 2s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config