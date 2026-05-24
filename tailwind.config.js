/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#0B1120',
        'neon-cyan': '#00F5FF',
        'accent-purple': '#7B2FF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00F5FF, 0 0 20px #00F5FF',
        'neon-purple': '0 0 10px #7B2FF7, 0 0 20px #7B2FF7',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
