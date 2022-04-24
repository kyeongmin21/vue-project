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
    port: 8080,
    proxy: {
      '^api': {
        // eslint-disable-next-line no-undef
        target,
        changeOrigin: true
      }
    },
    host: 'localhost',
    hot: true,
    disableHostCheck: true,
    https: false,
    overlay: false
  }
}
