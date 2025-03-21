/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
        amatic: ["Amatic SC", "sans-serif"],
        poiret: ["Poiret One", "sans-serif"],
      },
    },
  },
  plugins: [],
}

