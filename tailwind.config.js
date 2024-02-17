/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:
    {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        customWhite: 'hsl(0, 0%, 100%)',
        customGrey: 'hsl(0, 0%, 20%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)',
        customGreen: 'hsl(75, 94%, 57%)'
      }
    },
  },
  plugins: [],
}

