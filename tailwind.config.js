/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ' sans-serif'],
      },
      flexBasis: {
        '3/10': '30%',
        '7/10': '70%',
      },
    },
  },
  plugins: [],
};
