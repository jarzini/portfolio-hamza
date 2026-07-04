/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0B0F19', // fond principal sombre
        accent: '#6366F1', // indigo doux
      },
    },
  },
  plugins: [],
};
