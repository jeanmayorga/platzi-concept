// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      platzi: {
        1: '#98ca3f',
      },
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
