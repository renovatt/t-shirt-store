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
        600: "#009349",
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
        zoom: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        open: 'open .3s ease-out',
        zoom: 'zoom .3s forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

