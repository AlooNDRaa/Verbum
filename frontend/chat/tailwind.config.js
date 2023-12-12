/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    colors: {
      lightmode: {
        "blanco": "#CFF5E7", 
        "blanco2": "#A0E4CB", 
        "blanco3": "#59C1BD", 
        "azul": "#0D4C92", 
        "azul2" : "#5893D4",
        "azul3" : "#005B96",
      },
      darkmode: {
        "azul1": "#071E3D",
        "azul2": "#1F4287",
        "azul3": "#1C3655",
        "verdeagua1": "#278EA5",
        "verdeagua2": "#21E6C1",
        "blanco": "#CAEDFF",
      }
    },
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

