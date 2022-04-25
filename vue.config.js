const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    },
    host: 'localhost',
    hot: true,
    disableHostCheck: true,
    https: false,
    overlay: false
  }
}
