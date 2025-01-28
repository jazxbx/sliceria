/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
      },
      colors: {
        yellow: '#FACC14',
        orange: '#D55E06',
        brown: '#251804',
        cream: '#F9EDCD',
        green: '#8D8E6A',
      },
    },
  },
  plugins: [],
};
