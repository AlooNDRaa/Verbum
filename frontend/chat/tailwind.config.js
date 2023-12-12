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
    backgroundImage: {
      'dph': "url('src/assets/imgs/dph.png')",
      'gif': "src/assets/imgs/migif.gif"
    },
    screens: {
      'sm-280px': '280px',
      'sm-360px': '360px',
      'md-700px' : '1200px'
    },
    },
    // [ screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },]
  },
  plugins: [],
}

