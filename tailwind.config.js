/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFfamily:{
        sans:['Nunito, sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': '4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
          },
        },
      },

       
    },
  },
  plugins: [],
}

