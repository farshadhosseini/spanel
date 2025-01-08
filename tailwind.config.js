/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'yekan': ['Yekan', 'calibri', 'tahoma']
    },
    extend: {
      boxShadow: {
        container: `0px 4px 40px -30px rgba(0, 0, 0, 0.6)`
      },
    },
  },
  plugins: [],
}

