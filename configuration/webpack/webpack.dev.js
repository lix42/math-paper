const merge = require("webpack-merge");
const webpack = require("webpack");

const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  // https://webpack.js.org/configuration/devtool/
  devtool: "eval-source-map",

  // [chunkhash] cannot be used with webpack-dev-server, so for development builds,
  // don't use a hash at all on the bundle output.
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
