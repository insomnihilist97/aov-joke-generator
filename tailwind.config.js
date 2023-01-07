/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      keyframes: {
        fade_in: {
          '0%': { opacity: '0;' }, 
          '100%': { opacity: '1;' }, 
        }
      },
      animation: {
        'fade-in': 'fade_in .5s linear 1'
      },
      colors: {
        green: '#42b883',
        'gray-dark': '#0f172a',
      },
    },
  },
}
