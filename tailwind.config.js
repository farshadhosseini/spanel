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
        container: `0px 4px 40px -20px rgba(0, 0, 0, 0.6)`,
        card: `0px 4px 30px -20px rgba(0, 0, 0, 0.7)`
      },
    },
  },
  plugins: [],
}

