const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
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
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: { // https://github.com/terser/terser
            compress: {
              drop_console: true,
              arguments: true,
              passes: 2
            },
            format: {
              comments: false,
              max_line_len: 1024
            }
          }
        }),
        new CssMinimizerPlugin({
          parallel: true,
        }),
      ]
    },
    // plugins: [new MiniCssExtractPlugin()],

  }
};
