/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gruas: "url(/img/gruas.jpg)",
        neumaticos: "url(/img/neumaticos2.png)",
        miami: "url(/img/miami.png)",
      },
      colors: {
        primary: "#df0914",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
