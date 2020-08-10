const PROXY = "http://localhost:8085/";
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
