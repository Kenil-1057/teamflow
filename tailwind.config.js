/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1540px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1540px'
      },
    },
    extend: {
      colors:{
        "primary": "#4A4A4A",
        "secondary": "#575757",
        "dark_blue":"#2B3377",
        "maroon":"#565656",
        "dark_yellow":"#FFCA1D",
        "light_blue":"#FAFAFF",
        "nav_items":"#EEEEEE",
        "dark_gray":"#757575",
        "dark_yellow":"#FFCA1D",
        "dark_black":"#1F1F1F",
        "dark_green":"#606060",
        "medium_light_blue":"#686DF1",
        "dark_purple":"#9092B0",
        "dark_green":"#EB801D",
        "nevi_blue":"#2D3150",
        "medium_dark_blue":"#5C5E87",
        "medium_dark_green":"#D77F3F",
        "logo_blue":"#5565F0"
      },
      padding:{
        "150px":"150px",
        "138px":"138px",
        "260px":"260px",
        "87px" :"87px",
        "148px":"148px",
        "18px":"18px",
        "60px":"60px",
        "22px":"22px",
        "100px":"100px",
        "98px":"98px"
      },
      margin:{
        "110px":"110px",
        "150px":"150px",
        "210px":"210px",
        "180px":"180px",
        "122px":"122px",
        "100px":"100px"
      },
      lineHeight:{
        "70px":"70px",
        "34px":"34px",
        "58px":"58px",
        "38px":"38px",
        "30px":"30px",
        "45px":"45px",
        "81px":"81px",
        "48px":"48px",
        "52px":"52px",
        "33px":"33px",
        "60px":"60px",
        "50px":"50px"
      },
      letterSpacing:{
        "2%":"0.02rem",
        "0.5%":"0.005rem",
        "4%":"0.04rem"
      },
      fontSize:{
        "20px":"20px",
        "40px":"40px",
        "64px":"64px",
        "22px":"22px"
      },
      gap:{
        "90px":"90px",
        "124px":"124px",
        "110px":"110px",
        "92px":"92px",
        "184px":"184px",
        "175px":"175px",
        "263px":"263px",
        "118px":"118px",
        "10px":"10px",
        "22px":"22px"
      },
      borderRadius:{
        "20px":"20px",
        "10px":"10px"
      },
      gridTemplateColumns:{
        '15': 'repeat(15, minmax(0, 1fr))'
      },
      width:{
        "100px":"100px"
      },
      height:{
        "100px":"100px"
      }
      

    },
  },
  plugins: [],
}

