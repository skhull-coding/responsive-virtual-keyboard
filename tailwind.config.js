/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/*/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
