/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'verdeMentaClaro': '#B2F2A3',
      'verdeAqua': '#5DDCA7',
      'turquesaVivo': '#00C3B3',
      'azulCeuProfundo': '#00A7C1',
      'azulEletrico': '#008AC8',
      'azulRoyal': '#006AC3',
      'amareloPastel': '#F9E5A0',
      'verdeLimaoClaro': '#C6CF84',
      'verdeOlivaClaro': '#90B970',
      'verdeFloresta': '#55A26A',
      'verdeEsmeralda': '#008A5F',
      'verdeMusgo': '#00715E',
    }
  },
  plugins: [],
}