/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'm-bg': '#FFC107',
        'm-text': '#100F0F'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero-bg.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

