const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/index.html',
  ],
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.warmGray,
      white: colors.white,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
