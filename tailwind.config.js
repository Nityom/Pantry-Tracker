/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.sky, // Updated from lightBlue to sky
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
}