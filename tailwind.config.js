/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'yanone': ['"Yanone Kaffeesatz"', 'sans-serif'],
      'nunito': ['"Nunito"', 'sans-serif'],
      'open-sans': ['"Open Sans"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'],
    },
    colors: {
      'branco': '#F7F7F7',
      'verde-100': '#B2F2A3',
      'verde-200': '#5DDCA7',
      'verde-300': '#55A26A',
      'verde-400': '#008A5F',
      'verde-500': '#00715E',
      'verde-600': '#6EDBA7',
      'lime-50': '#f7fee7',
      'lime-100': '#C6CF84',
      'lime-200': '#90B970',
      'turquesa-100': '#00C3B3',
      'azul-claro-100': '#C5E3EE88',
      'azul-100': '#00A7C1',
      'azul-200': '#008AC8',
      'azul-300': '#006AC3',
      'amarelo-100': '#F9E5A0',
      'azul-900': '#0A2144;',
      'cinza-200': '#C0D6C0;',
      'ciano-900': '#0c4a6e;',
      'ciano-950': '#082f49;',
      'branco-200': '#E5E5E5FF;',
      
    },
    backgroundImage: {
      'vetor1': "url('/src/assets/vetor-home-1.svg')",
      'vetor2': "url('/src/assets/vetor-home-2.svg')",
      'vetor3': "url('/src/assets/vetor-home-3.svg')",
      'banner': "url('/src/assets/banner-home.png')",
      'banner': "url('/src/assets/banner-home.png')",
      'banner-mobile': "url('/src/assets/banner-home-mobile.png')",
    },
  },
  plugins: [],
}