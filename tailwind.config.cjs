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
            "h1, h2, h3, h4, h5, h6, a, p, li": {
              color: "#374151",
            },
            h1: {
              fontWeight: "600",
            },
            h2: {
              fontWeight: "500",
            },
            h3: {
              fontWeight: "400",
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
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            "h1, h2, h3, h4, h5, h6, a, p, li": {
              color: "#D1D5DB",
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
