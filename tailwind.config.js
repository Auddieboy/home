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
        'bg-primary': 'white',
        'bg-secondary': '#EAD2AC',
        'bg-hover': '#d9c3ce',
        'text-dark': '#323031',
        'text-light': '#177E89',
        'text-hover': '#084C61',
        'text-heading': '#177E89'
      }
    },
  },
  plugins: [],
}

