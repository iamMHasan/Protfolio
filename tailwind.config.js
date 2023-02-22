/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :  'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Righteous' : ['Righteous'],
        'Gloock' : [ 'Gloock', 'serif']
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}