/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fffdf2",
          100: "#fffbe6",
          200: "#fff5bf",
          300: "#ffef99",
          400: "#ffe34d",
          500: "#ffd700",
          600: "#e6c200",
          700: "#bfa100",
          800: "#998100",
          900: "#7d6900",
        },
      },
      spacing: {
        c70: "16.6rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
