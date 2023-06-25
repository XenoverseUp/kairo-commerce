const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-easing"),
    require("tailwind-easing-gradients")({
      variants: ["responsive"],
      // required
      gradients: {
        "black-to-transparent": {
          easing: "cubic-bezier(0.48, 0.3, 0.64, 1)",
          color: ["#000", "rgba(0, 0, 0, 0)"],
        },
      },
      // defaults
      alphaDecimals: 5,
      colorMode: "lrgb",
      type: "linear",
      easing: "ease", // default settings
      colorStops: 15,
      directions: {
        t: "to top",
        r: "to right",
        b: "to bottom",
        l: "to left",
      },
    }),
  ],
}

module.exports = config
