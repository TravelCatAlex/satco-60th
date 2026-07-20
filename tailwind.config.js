/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        satco: {
          red: '#ad1f2b',
          black: '#000000',
          gray: '#adb0b0',
          white: '#ffffff',
        },
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
