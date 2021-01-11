module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        sm: ".9375rem",
      },
    },
    letterSpacing: {
      widest: ".15em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
