/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'background-image': "url('./assets/logobackground.jpg')",
      })
    },
  },
  plugins: [],
}

