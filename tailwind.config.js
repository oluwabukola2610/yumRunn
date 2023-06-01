/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Lato",
        secondary: "Roboto Slab",
        logo:'Pacifico'
      },
      colors: {
        accent: "#B809C3",
        deeperO: "hsl(28, 100%, 50%)",
        deepOrange: "#ffaa00",
        lightOrange: "#ffb31a",
      },
      
    },
  },
  plugins: [],
};
