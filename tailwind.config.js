/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["Clash Display", "sans-serif"],
      },
      //   backgroundImage: {
      //     "gradient-linear":
      //       "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)",
      //     linear: "linear-gradient(90deg, #1F80EB, #2284F1, #061C93, #051A91)",
      //   },
    },
  },
  plugins: [],
};
