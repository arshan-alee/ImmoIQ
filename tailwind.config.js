/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
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
        gray: "#C0C0C0",
        lightBlue: "#EEFBFF",
        mustard : '#FEA500'
      }
    },
  },
  plugins: [],
}