// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        73: "73%",
        47: "47%",
      },
    },
  },
  plugins: [],
};
