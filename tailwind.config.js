/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./404.html"
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
        nightBlack: '#252429',  
        white: '#FFFFFF',
      },
      keyframes: {
        scroll: {
          '0%'  :{ transform : 'translateX(0%)'},
          '100%': { transform : 'translateX(-150%)'},
        },
      },
      animation: {
          scroll : 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
}