/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      fontFamily:{
        orbitron:[ 'Orbitron', 'sans-serif' ],
        saria:[ 'Saira', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

