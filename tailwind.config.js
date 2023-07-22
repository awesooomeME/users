/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      dark_blue: 'hsl(210, 68%, 36%)',
      light_blue: 'hsl(204, 88%, 71%)'
    },
  },
  plugins: [],
}
