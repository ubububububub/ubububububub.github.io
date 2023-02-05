/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#202632',
        text: '#f9fafb',
        bar: '#f9fafb',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
