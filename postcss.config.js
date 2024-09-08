// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }


module.exports = {
  plugins: [
    require('postcss-nested'),  // Add this before Tailwind CSS
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
