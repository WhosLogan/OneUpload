/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#cfadff',
          500: '#b276fb',
          600: '#9852fb',
          700: '#9540ff',
          800: '#822dfa',
          900: '#7512ff',
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'selector',
};