const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  devServer: {
    host: 'localhost',
    hot: true,
    disableHostCheck: true,
    https: false,
    overlay: false
  }
}
