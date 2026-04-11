import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        marble: {
          cream: '#F5F3EE',
          vein: '#D4CFC4',
        },
        concrete: {
          warm: '#E8E4DD',
          dark: '#A39E93',
        },
        brass: {
          light: '#D4AF78',
          deep: '#B8935E',
        },
        primary: '#2A2621',
        secondary: '#5C5751',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
