/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", 'cyberpunk', 'retro', 'acid', 'bumblebee'],
    darkTheme: "dark", // name of one of the included themes for dark mode
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
}