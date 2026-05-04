/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon-blue': '#131921',
        'amazon-light-blue': '#232f3e',
        'amazon-yellow': '#febd69',
      }
    },
  },
  plugins: [],
}
