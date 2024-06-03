/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text-black': '#333333',
        'primary-1': '#BE6361',
        'text-white': '#FFFFFF',
        'bg-hero': '#FF8482',
        'bg-mel-solum': '#FFF2DD',
      },
      fontFamily: {
        'alfa-slab-one': ["Alfa Slab One", "serif"],
        'dm-sans': ["DM Sans", "serif",]
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },
      height: {
        '108': '27rem',
        '18': '18px',
      },
      width: {
        '24': '24px',
      },
      screens:{
        'xs': '550px',
        '3xl': '1800px',
        '4xl': '1900px'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },

        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.text-shadow-outline-lg': {
          textShadow: `
            4px 4px 6px rgba(0, 0, 0, 0.5),
            -1.5px -1.5px 0 #000,
            1.5px -1.5px 0 #000,
            -1.5px 1.5px 0 #000,
            1.5px 1.5px 0 #000`,
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}