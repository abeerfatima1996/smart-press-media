/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaguar: ['Jaguar', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
      colors:{
        primary: '#D1B271',
        gray: '#FFFFFF99'
      }  
    },
  },
  
}

