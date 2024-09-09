// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }


module.exports = {
  plugins: [
    require('postcss-nested'), 
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
