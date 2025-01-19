/** @type {import('tailwindcss').Config} */
import { light } from "@cloudinary/url-gen/qualifiers/fontWeight";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        100: "28rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#ff6c6c",
          secondary: "#f44336",
        },
      },
      "dark",
      "corporate",
    ],
  },
};
