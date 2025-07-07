/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Exo 2"', 'sans-serif'],
        paragraf: ['Lato', 'sans-serif']
      },
      colors: {
        greenBase: '#27AE60',
        secondGreen: '#145A32',      
        gray: '#EBEBEB',
        night: '#2C3E50',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}