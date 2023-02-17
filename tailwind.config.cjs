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
      fontFamily: {
        primary: ['var(--font-family-jost)'],
      },

      fontSize: {
        xs: [
          '14px',
          {
            lineHeight: '14px',
            letterSpacing: '2px',
          },
        ],
        sm: [
          '15px',
          {
            lineHeight: '22px',
            letterSpacing: '1px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '25px',
          },
        ],
        lg: [
          '20px',

          {
            lineHeight: '25px',
            letterSpacing: '2px',
          },
        ],
        xl: [
          '24px',

          {
            lineHeight: '25px',
            letterSpacing: '2px',
          },
        ],
        '2xl': [],
        '3xl': [],
        '4xl': [],
        '5xl': [],
        '6xl': [],
      },

      colors: {
        primary: {
          default: '#E7816B',
        },
        secondary: {
          default: '#FFAD9B',
        },
        'light-gray': '#F2F2F2',
        'dark-gray': '#333136',
        background: {
          default: '#FFFFFF',
          black: '#1D1C1E',
        },
      },
    },
  },
  plugins: [],
};
