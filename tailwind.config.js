/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'ui-sans-serif', 'system-ui'], 
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        'xss': '9px', 
      },
      colors : {
        primary: {
          DEFAULT: '#459E97',
          light: '#4eb1a9'
        },
        secondary: {
          DEFAULT: '#034154'
        },
        grey:{DEFAULT: '#E8E8E8',
          light: '#C0C0C0'
        },
        lightBlue: "#EEFBFF",
        mustard : '#FEA500'
      }
    },
  },
  plugins: [],
}