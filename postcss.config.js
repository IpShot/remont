module.exports = {
  plugins: [
    require('postcss-import')({ path: ['src'] }),
    require('precss')(),
    require('autoprefixer')()
  ]
}
