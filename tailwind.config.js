/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightDark: "#121212",
        orange: "#AE752C",
        white: "#FFFFFF",
        gray: "#808080",
        black: "#000000",
        semiBlack:"#080808"
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
