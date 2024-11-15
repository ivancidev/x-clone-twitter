/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        interRegular18: ['InterRegular18', 'sans-serif'],
        interBold18: ['InterBold18', 'sans-serif'],
        interSemiBold18: ['InterSemiBold18', 'sans-serif'],
        interRegular24: ['InterRegular24', 'sans-serif'],
        interRegular28: ['InterRegular28', 'sans-serif'],
      },
      colors: {
        twitter: {
          dark: '#000000',
          light: '#EFF9FF',
          'hover-dark': '#1A91DA',
          'light-gray': '#8899A6',
        },
        button: {
          'btn-primary': '#1D9BF0',
        },
      },
    },
  },
  plugins: [],
};
