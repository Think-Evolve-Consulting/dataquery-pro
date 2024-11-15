/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#045CD4',
        // primary: '#3b82f6',
        secondary: '#edf2f7',

        dark: {
          10: '#F7FAFC',
        },
      },
    },
  },
  plugins: [lineClamp],
};
