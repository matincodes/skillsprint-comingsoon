/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
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
        semiBlack: "#080808",
        darkGray: "#1A1A1A",
        darkWhite: "#71879C33",
        footerBg:"#1A1106"
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Inter: "Inter",
      },
    },
  },
  plugins: [scrollbar],
};
