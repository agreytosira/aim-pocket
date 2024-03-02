/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px'
      }
    },
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss']
}
