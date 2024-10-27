/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        hp_bg: '#0097B2',
        hp_ans_opt: '#ef7f89',
      },
      fontFamily: {
        hp_font: ['FormaDJRVariableWeb', 'sans-serif'], // Name your font here
      },
    },
  },
  plugins: [],
};
