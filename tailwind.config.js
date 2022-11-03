/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffa255',
        secondary: '#0f4871',
        green: '#65d890',
        'dark-green': '#4a9f6a',
      },
    },
  },
  plugins: [],
};
