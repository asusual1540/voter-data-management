/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      bdDarkBg: "#18181B",
      bdGreen: "#079F51",
      bdRed: "#EA1D24",
      postRed: "#C41C22",
      postRedDark: "#B00F0A",
      postRedLight: "#D5170F",
      pdfLight: "rgb(238, 238, 238)",
      pdfLightHover: "rgba(0, 0, 0, 0.1)",
      pdfDark: "#091139",
      pdfDarker: "#090e34",
      pdfDarkHover: "#090e34",
      dgenYellow: "#f8ff00",
      dgenLight: "rgb(238, 238, 238)",
      dgenLightHover: "rgba(0, 0, 0, 0.1)",
      dgenDark: "#091139",
      dgenDarkBorder: "rgba(236, 237, 238, .2)",
      dgenDarker: "#090e34",
      dgenDarkest: "#060a23",
      dgenDarkHover: "#090e34",
      dgenBlueLight: "#22d3ee",
      // dgenBlueLightBorder: "rgba(236, 237, 238, .2)",
      // dgenBlueLighter: "#090e34",
      // dgenBlueLightHover: "#090e34",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
    screens: {
      xxs: "400px",
      // => @media (min-width: 400px) { ... }

      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [nextui(
    {
      themes: {
        extend: {
          colors: {
            "primary": "#4A6CF7",
            "background": "#4A6CF7"
          },
        },
      },
    }
  )],
};
