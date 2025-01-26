/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'custom-linear': 'linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'custom-color-yellow': 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'custom-color-red': 'linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'custom-blue': 'linear-gradient(to right, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      },
      screens: {
        'xs': {'raw': '(max-width: 344px)'},
      },

    },
  },
  

  plugins: [],
}