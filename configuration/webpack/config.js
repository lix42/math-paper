/* eslint-disable xss/no-mixed-html */
const os = require("os");
const path = require("path");
const babelrc = require("../../babel.config");

const isDev =
  process.env.NODE_ENV !== "production" && process.argv.indexOf("-p") === -1;

// Path
const pkgRoot = path.resolve(__dirname, "../../");
const srcRoot = path.resolve(pkgRoot, "src");
const outputBuild = path.join(pkgRoot, "build");

module.exports = {
  threadCount: Math.max(os.cpus().length - 1, 1),
  serverPort: 3456,
  serverHost: "0.0.0.0",
  isDev: isDev,
  path: {
    pkgRoot: pkgRoot,
    srcRoot: srcRoot,
    outputBuild: outputBuild,
    nodeModules: path.resolve(pkgRoot, "node_modules"),
    packageJson: path.join(pkgRoot, "package.json"),
    htmlTemplate: path.join(srcRoot, "index.html"),
    entry: path.join(pkgRoot, "/src/index.jsx"),
  },
  babelrc: babelrc,
};
