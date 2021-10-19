module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
      },
      colors: {
        gray: "#8E8D8A",
        tan: {
          light: "#EAE7DC",
          dark: "#D8C3A5",
        },
        red: {
          light: "#E98074",
          dark: "#E85A4F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
