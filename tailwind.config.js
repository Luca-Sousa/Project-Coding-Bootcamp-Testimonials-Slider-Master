/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.{css,js}'],
  theme: {
    extend: {
      colors: {
        'col-DB': 'hsl(240, 38%, 20%)',
        'col-GB': 'hsl(240, 18%, 77%)'
      },
      fontFamily: {
        Inter: 'Inter'
      }
    },
  },
  plugins: [],
}

