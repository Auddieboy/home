/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*/{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      colors: {
        'terracotta': '#e38264',
        'cobalt': '#0f3261',
        'terracotta-dark': '#ad593e',
        'gray-light': '#f5f5f5'
      }
    },
  },
  plugins: [],
}

