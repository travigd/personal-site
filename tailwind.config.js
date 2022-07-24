/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  typography: (theme) => ({
    default: {
      css: {
        code: {
          // We use highlight.js theme in places which try to color <code />
          // elements. This is annoying because Tailwind Typography applies
          // background styles to the wrapping <pre /> element.
          backgroundColor: "transparent",
        },
      },
    },
  }),
};
