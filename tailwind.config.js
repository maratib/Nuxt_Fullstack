module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      fontFamily: { headline: ['Oswald'] },
      colors: {
        myRed: '#FF0000',
        myBlue: '#0000FF',
        myLime: '#00FF00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
  ],
}
