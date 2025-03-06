/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#e1a878',
          100: '#B99E73',
          200: '#A68D60',
          300: '#8D774F',
          400: '#7A653F',
          500: '#6A4C31', // Your main brown color
          600: '#5A3E24',
          700: '#492F18',
          800: '#38210F',
          900: '#27150A',
        },// Adding custom brown color
        vanilla:{
          100: '#d2c1aa',          
        }
      },
    },
  },
  plugins: [],
};



