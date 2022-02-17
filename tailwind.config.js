const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Alata', ...defaultTheme.fontFamily.sans],
      josefin: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'dark-gray-100': 'hsl(0, 0%, 55%)',
        'dark-gray-200': 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
}
