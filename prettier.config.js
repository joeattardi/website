module.exports = {
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'none',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}