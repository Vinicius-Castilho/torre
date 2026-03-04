/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        torreBlue: '#002D7A',
        torreCyan: '#00D1FF', // Ajuste para o tom exato da holding
        torreGray: '#F8FAFC',
      },
    },
  },
  plugins: [],
}

