/* eslint-disable xss/no-mixed-html */
const webpack = require("webpack");
const config = require("./config");

// Sever
const serverHost = config.serverHost;
const serverPort = config.serverPort;
const isDev = config.isDev;

// Path
const pathConfig = config.path;
const pkgRoot = pathConfig.pkgRoot;
const srcRoot = pathConfig.srcRoot;
const outputBuild = pathConfig.outputBuild;
const nodeModules = pathConfig.nodeModules;
const htmlTemplate = pathConfig.htmlTemplate;
const entry = pathConfig.entry;

// build
const babelrc = config.babelrc;
const threadCount = config.threadCount;

// Webpack plugins.
const HTMLWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: htmlTemplate,
  filename: "index.html",
  inject: "root",
});

const definePluginConfig = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify(isDev ? "development" : "production"),
  },
});

// const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// const commonsChunkPlugin = new CommonsChunkPlugin({
//   name: "vendor",
//   minChunks: module => /node_modules/.test(module.resource),
// });

module.exports = {
  context: pkgRoot,
  parallelism: threadCount,
  devServer: {
    host: serverHost,
    port: serverPort,
    contentBase: srcRoot,
    // https: true,
    hot: isDev,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    overlay: true,
    stats: { colors: true },
  },
  entry: ["react-hot-loader/patch", entry],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcRoot,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory",
        options: Object.assign(
          {
            babelrc: false,
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
          },
          babelrc
        ),
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: [nodeModules],
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    modules: [srcRoot, nodeModules],
    extensions: [".js", ".jsx"],
  },
  // https://webpack.js.org/configuration/output/
  output: {
    filename: "index.js",
    path: outputBuild,
    publicPath: "/",
  },
  // https://webpack.js.org/configuration/other-options/#cache
  cache: true,
  plugins: [htmlWebpackPlugin, definePluginConfig],
};
