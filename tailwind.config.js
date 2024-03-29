/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
 plugins: [require("daisyui")],
}

