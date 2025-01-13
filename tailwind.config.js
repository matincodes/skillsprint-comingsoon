/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
        Inter: "Inter",
      },
      colors: {
        ...colors,
        lightDark: "#121212",
        goldenBrown: "#AE752C",
        white: "#FFFFFF",
        gray: "#808080",
        black: "#000000",
        semiBlack: "#080808",
        darkGray: "#1A1A1A",
        darkWhite: "#71879C33",
        footerBg:"#1A1106",
        lightGray:"#C7C7C7"
      },
    },
  },
  plugins: [scrollbar],
};
