/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mali: ['Mali', 'cursive']
      },
      colors: {
        'match-dark': '#ED663E',
        'match-ligth': '#FD9A7C'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
