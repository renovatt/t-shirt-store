/* eslint-disable no-undef */
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
      },
      keyframes: {
        open: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        open: 'open 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

