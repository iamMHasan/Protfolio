/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Righteous' : ['Righteous']
      }
    },
  },
  plugins: [require("daisyui")],
}