/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {},

      fontSize: {
        xs: [],
        sm: [],
        base: [],
        xl: [],
        '2xl': [],
        '3xl': [],
        '4xl': [],
        '5xl': [],
        '6xl': [],
      },

      colors: {
        primary: {},
        bodytext: {},
        heading: {},
        background: {},
      },
    },
  },
  plugins: [],
};
