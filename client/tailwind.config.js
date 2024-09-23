/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131822",
        secondary: "#ffff",
        danger: "#fb1b1b",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "356px",
        md: "510px",
        lg: "868px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
