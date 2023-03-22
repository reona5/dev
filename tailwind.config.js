const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,js,md,mdx,ts}"],
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
            code: {
              fontFamily: "Fira Code, monospace",
              span: {
                fontFamily: "Fira Code, monospace",
              },
            },
            "p, li": {
              code: {
                color: "white",
                backgroundColor: "#0D1117",
                padding: "4px 6px",
                borderRadius: "4px",
                fontWeight: "300",
              },
            },
          },
        },
      },
    },
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
