/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customPrimaryDark: '#13183f',
        customPrimaryLight: '#83869a',
        customBlue: '#666ca3',
        customPink: '#f74780',
        customPinkLight: '#ffa7c3',
        customGradientOrange: '#ff6f48',
        customGradientBlue: '#4851ff',
        customGradientPink: '#f02aa6',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr)))',
      },
    },
  },
  plugins: [],
};
