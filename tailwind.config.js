/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6A3D',
        secondary: '#F4DB7D',
        ternary: '#9DAAF2',
        priBg: '#1A2238',
        secBg: '#29375B',
        whity:'#F8F8FB'

      }
    },
  },
  plugins: [],
}

