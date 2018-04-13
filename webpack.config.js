const config = require("./configuration/webpack/config.js");
const isDev = config.isDev;

module.exports = require(`./configuration/webpack/webpack.${
  isDev ? "dev" : "prod"
}.js`);
