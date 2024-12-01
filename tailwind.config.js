/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'daniel-jack-blue': '#4A6CF7',
        'custom-dark-blue': 'rgb(9 14 52)',
        'custom-gray': 'rgb(149 156 177)',
        'custom-blue': 'rgb(74 108 247)'
      },
      screens: {
        'xl-plus': '1320px', // Custom screen size
        'lg-plus': '1140px',
        'lg-plus': '960px',
        'md-plus': '720px',
        'sm-plus': '540px'
      },
      boxShadow: {
        'custom': '0px 11px 41px -11px rgba(9, 14, 52, 0.1)', // Custom shadow
      },
      lineHeight: {
        'relaxed-custom': '1.625',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}