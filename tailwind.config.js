
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Main: [
        // '"Gilda Display", serif'
        '"Metal Mania", system-ui;'
      ],
      primary: [
        '"Play", sans-serif'
      ]
    },
    backgroundImage: {
      'home': "url('./Assets/dark.png')",
      'middle': "url('./Assets/dark2.png')",
      'footer': "url('./Assets/footer.png')"
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
    }
  },
  plugins: [
  ]
}



