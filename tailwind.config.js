/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        'background-image': "url('./assets/background.jpg')",
      })
    },
  },
  plugins: [],
}

