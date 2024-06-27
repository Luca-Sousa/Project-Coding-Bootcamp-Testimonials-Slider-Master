/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.{css,js}'],
  theme: {
    extend: {
      colors: {
        'col-DB': 'hsl(240, 38%, 20%)',
        'col-GB': 'hsl(240, 18%, 77%)',
        'col-body': 'hsl(0, 0, 100)'
      },
      fontFamily: {
        Inter: 'Inter'
      },
      backgroundImage: {
        'Img-pattern-bg': "url('/src/assets/images/pattern-bg.svg')",
        'Img-pattern-curve': "url('/src/assets/images/pattern-curve.svg')",
        'Img-pattern-quotes': "url('/src/assets/images/pattern-quotes.svg')",
        'Img-tanya': "url('/src/assets/images/image-tanya.jpg')"
      },
      screens: {
        xs: '400px'
      }
    },
  },
  plugins: [],
}

