const PROXY = "https://jobshaar.herokuapp.com/";
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: PROXY,
        ws: false,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "src/assets/styles/_vars.scss";`,
        additionalData: `@import "src/assets/styles/_placeholders.scss";`
      }
    }
  }
};
