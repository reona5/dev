const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              fontFamily: 'Fira Code, monospace',
              span: {
                fontFamily: 'Fira Code, monospace',
              },
            },
            'p, li': {
              code: {
                color: 'white',
                backgroundColor: '#0D1117',
                padding: '4px 6px',
                borderRadius: '4px',
                fontWeight: '300',
              },
            },
          },
        },
      },
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
