/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      netflixSansRegular: ["Netflix Sans Regular", "sans-serif"],
      netflixSansBold: ["Netflix Sans Bold", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],

};
