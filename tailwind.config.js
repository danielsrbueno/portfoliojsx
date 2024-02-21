/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      fontSize:{
        front: ['5.7rem' , '1'],
      },
      animation:{
        'ease': 'ease-in .8s linear infinite',
      },
    },
  },
  plugins: [],
}