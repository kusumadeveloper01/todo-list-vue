/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        material: ['"Material Symbols Outlined"'],
        pixelify: ['"Pixelify Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
