/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(209, 23%, 22%)',
        secondary: 'hsl(207, 26%, 17%)',
        tertiary: 'hsl(200, 15%, 8%)',
        DarkGray : 'hsl(0, 0%, 52%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',

      }
    },
  },
  plugins: [],
}