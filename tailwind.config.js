/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
   /*  Container ayarları(varsayılan) */
    container: {
      center: true,
       screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px', 
      },
    },
    extend: {
      /* Custom font kullanmak için extend yaptık */
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif'],
      },
      /* Custom rekler */
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
      spacing: {
        128: '32rem',
      },
    }, 
  },
  plugins: [],
}
