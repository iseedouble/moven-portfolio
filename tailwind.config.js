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
      },
      screens: {
        'xl-plus': '1320px', // Custom screen size
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}