/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'verde-100': '#B2F2A3',
      'verde-200': '#5DDCA7',
      'verde-300': '#55A26A',
      'verde-400': '#008A5F',
      'verde-500': '#00715E',
      'lime-100': '#C6CF84',
      'lime-200': '#90B970',
      'turquesa-100': '#00C3B3',
      'azul-100': '#00A7C1',
      'azul-200': '#008AC8',
      'azul-300': '#006AC3',
      'amarelo-100': '#F9E5A0',
    }
  },
  plugins: [],
}