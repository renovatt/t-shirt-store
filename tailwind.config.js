/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        900: "#e3e3e3",
        800: "#ffffff",
        700: "#1e1f20",
      }
    },
  },
  plugins: [],
}

