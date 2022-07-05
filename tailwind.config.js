module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily:{
      inter: ['Inter','sans-serif'],
      mont: ['Montserrat', 'sans-serif']
    },
    colors:{
      black : '#171717',
      blacklight:'#3B3B3B',
      graylight: '#CCCCCC',
      gray:{
        500: '#7E7E7E'
      },
      purple: '#8C7DEC',
      white : '#FFFF',

    }
  },
  plugins: [],
}