/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        250: '250px',
      },
      height: {
        250: '250px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
