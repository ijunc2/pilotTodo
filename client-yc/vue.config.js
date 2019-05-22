module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3010',
        changeOrigin: true,
        pathRewrite: { '^/': '' },
        ws:false
      }
    },
  },
}