const PROXY = 'http://localhost:8080'
module.exports = {
  devServer: { 
    proxy: {
      '^/api': {
        target: PROXY, 
        ws: false,
        changeOrigin: true
      }
    }
  },
} 