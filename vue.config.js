const PROXY = "http://localhost:8081/";
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: PROXY,
        ws: false,
        changeOrigin: true
      }
    }
  }
};
