/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {},
    colors: {
      softBlue: {
        DEFAULT: "hsl(215, 51%, 70%)",
        50: "hsla(215, 51%, 70%, 50%)",
      },
      cyan: {
        DEFAULT: "hsl(178, 100%, 50%)",
        50: "hsla(178, 100%, 50%, 50%)",
      },
      veryDarkBlueMain: "hsl(217, 54%, 11%)",
      veryDarkBlueCard: "hsl(216, 50%, 16%)",
      veryDarkBlueLine: "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      serif: "Outfit",
    },
  },
  plugins: [],
};
