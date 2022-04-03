const base = require("../../tailwind.config.cjs");

module.exports = {
  presets: [base],
  content: [
    "./src/**/*.{html,svelte,tsx,ts,jsx,js,css}",
    "../../packages/**/*.{html,svelte,tsx,ts,jsx,js,css}",
  ],
  options: {
    rejected: true,
    printRejected: true,
    safelist: ["html", "body", "dark"],
    safelistPatterns: [/svelte-/],
  },
};
