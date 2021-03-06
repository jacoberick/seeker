module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        seek: "50rem",
      },
      padding: {
        header: "76px",
      },
      screens: {
        bOne: { max: "1240px" },
        bTwo: { max: "1076px" },
        bThree: { max: "1024px" },
        bFour: { max: "886px" },
        bFive: { max: "700px" },
        bSix: { max: "600px" },
        bSeven: { max: "500px" },
        bEight: { max: "450px" },
        bNine: { max: "375px" },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        dom: ["Domine", "serif"],
        lobster: ["Lobster", "cursive"],
        pow: ["Zen Kurenaido", "sans-serif"],
      },
      colors: {
        tan: {
          light: "#EAE7DC",
          dark: "#ad9c84",
        },
        red: {
          light: "#E98074",
          dark: "#E85A4F",
        },
      },
      height: {},
      outline: {
        redDot: "2px solid #374151",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
