/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'color-1': 'var(--text-color-1)',
        'color-2': 'var(--text-color-2)',
        'color-3': 'var(--text-color-3)',
        'color-4': 'var(--color-4)',
        'color-5': 'rgba(var(--color-5), <alpha-value>)',
        'color-6': 'var(--color-6)',
        'color-7': 'var(--color-7)',
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
        'custom': '0.5rem 0.5rem 1rem 0.5rem rgba(9, 14, 52, 0.5)', // Custom shadow
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