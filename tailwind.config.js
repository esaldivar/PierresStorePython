module.exports = {
  purge: ['./server/templates/*.html', './client/**/*.js','./client/**/*.jsx', './client/**/*.ts', './client/**/*.tsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    fontFamily: {
    
    },
    extend: {
      colors: {
        'primary': '#E0A100',
        'lightBrown': '#f0d797'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
