/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'Nosi-Fer': ['Nosifer', 'sans-serif'],
        'md': ['DM serif Display' , 'sans-serif']      
    },
    },
  },
  plugins: [],
}

