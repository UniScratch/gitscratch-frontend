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
  publicPath: './'
};

configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: 4,
          terserOptions: {
            compress: {
              warnings: true,
              drop_debugger: true, // 删除debugger
              drop_console: true  // 删除console
            }
          }
        })
      ],
    }
}
