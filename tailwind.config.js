const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        header: '#e2e8f0'
      },
      gradientColorStops: {
        'transparent-black-60': 'rgba(0, 0, 0, 0.6)',
        'transparent-black-70': 'rgba(0, 0, 0, 0.7)'
      }
    }
  },
  plugins: [],
}
