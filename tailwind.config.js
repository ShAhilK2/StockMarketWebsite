/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#1E293B",
        bluegraydark: '#1E293B',
      }
    },
  },
  plugins: [],
}
