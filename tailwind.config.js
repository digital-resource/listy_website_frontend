const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        lightBlue: '#75A8BF',
      },
      keyframes: {},
      animation: {},
      backgroundImage: {
        hero: "url('/images/hero.webp')",
        form_gradient: 'rgba(255, 255, 255, 0.90);',
        video1: "url('/images/video1.webp')",
        video2: "url('/images/video2.webp')",
      },
      boxShadow: {
        cardShadow: '0px 15px 24px 0px rgba(0, 0, 0, 0.07)',
      },
      screens: {
        xsm: '414px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
