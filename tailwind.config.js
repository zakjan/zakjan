const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
       'margin': 'margin',
      },
    },
    colors: {
      orange: colors.orange,
      gray: colors.warmGray,
      white: colors.white,
    },
  },
  variants: {
    extend: {
      margin: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
