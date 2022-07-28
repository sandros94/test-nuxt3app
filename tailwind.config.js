module.exports = {
  content: [
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './App.vue',
    './app.vue',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
