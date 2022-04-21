const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "GitScratch";
        return args;
      })
  },
  publicPath: './',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}

