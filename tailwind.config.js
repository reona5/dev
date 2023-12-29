/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p, li": {
              code: {
                color: "#dbdee3",
                backgroundColor: "#1c1f23",
                padding: "4px 6px",
                borderRadius: "4px",
                fontWeight: "300",
              },
            },
            "h1": {
              fontWeight: "600",
            },
            "h2": {
              fontWeight: "500",
            },
            "h3": {
              fontWeight: "400",
            },
            "h4, h5, h6": {
              fontWeight: "300",
            },
          },
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
