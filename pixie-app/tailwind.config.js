/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      purple: {
        xl: '#f1edff',
        l: '#d2c4ff',
        default:'#8E6DFF',
        dark:'#7952ff',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1300px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1500px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
