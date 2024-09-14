/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xsm: '440px',
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      robotoFlex: ['Roboto Flex', 'sans-serif'],
    },
    extend: {
      colors: {
        blackColor: '#282828',
        grayColor: '#999999',
        lightGrayColor: 'F1F1F1',
        whiteColor: '#F7F7F7',
        blueColor: '#0147FF',
        blueColorDark: '#0d328f',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
};
