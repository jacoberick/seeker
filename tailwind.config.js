module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        dom: ["Domine", "serif"],
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        gray: "#8E8D8A",
        tan: {
          light: "#EAE7DC",
          dark: "#ad9c84",
        },
        red: {
          light: "#E98074",
          dark: "#E85A4F",
        },
      },
      height: {
        almostScreen: "calc(100vh - 76px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
