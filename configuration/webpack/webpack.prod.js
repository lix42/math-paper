const baseConfig = require("./webpack.base");

const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
  // https://webpack.js.org/configuration/devtool/
  devtool: false,

  // For production builds, chunks must have a content hash in the filename
  // for efficient caching.
  output: {
    filename: "[name].[chunkhash:10].bundle.js",
    chunkFilename: "[name].[chunkhash:10].bundle.js",
  },

  // TODO: BundleAnalyzerPlubin
  // https://github.com/webpack-contrib/webpack-bundle-analyzer
});
