/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue.js,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

      },
      gridTemplateColumns: {
        //simple grid 
        '70/30' : '70% 28%',
      },
    },

    container: {
      padding: {
        DEFAULT: '5px',
        sm: '5px',
        lg: '5px',
        xl: '5px',
        '2xl': '5px',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}

