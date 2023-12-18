/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Archivo', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace']
    },
    extend: {
      colors: {
        
      }
    },
  },
  plugins: [],
}