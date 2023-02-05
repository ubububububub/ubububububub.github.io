/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        light__background: '#f9fafb',
        light__text: '#202632',
        light__bar: '#202632',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
