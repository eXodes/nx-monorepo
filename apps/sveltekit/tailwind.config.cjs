const base = require("../../tailwind.config.cjs");

module.exports = {
  presets: [base],
  content: [
    "./src/**/*.{html,svelte,tsx,ts,jsx,js,css}",
    "../../packages/**/*.{html,svelte,tsx,ts,jsx,js,css}",
  ],
  theme: {
    colors: {
      brand: {
        DEFAULT: "#FF3E00",
        50: "#FFC9B8",
        100: "#FFBAA3",
        200: "#FF9B7A",
        300: "#FF7C52",
        400: "#FF5D29",
        500: "#FF3E00",
        600: "#C73000",
        700: "#8F2300",
        800: "#571500",
        900: "#1F0700",
      },
    },
  },
};
