
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#FFD700', // Define your golden color here
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'], // Enable hover variant for border width
    },
  },
  plugins: [],
}
