/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        firstFont: 'Montserrat',
        secondFont: 'Roboto'
      },
      colors:{
        bodybackground: '#F2F2F2',
        colorone: '#4F4F4F',
        colortwo: '#828282',
        colorthree: '#C4C4C4',
        colorfour: '#2F80ED'
      },
      width:{
        pWidth: '370px',
        skillW: '500px'
      },
      gap:{
        first: '85px',
        second: '78px'
      }
    },
  },
  plugins: [],
}
