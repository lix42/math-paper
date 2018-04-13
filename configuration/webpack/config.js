/* eslint-disable xss/no-mixed-html */
const os = require("os");
const fs = require("fs");
const path = require("path");

const isDev =
  process.env.NODE_ENV !== "production" && process.argv.indexOf("-p") === -1;

// Path
const pkgRoot = path.resolve(__dirname, "../../");
const srcRoot = path.resolve(pkgRoot, "src");
const outputBuild = path.join(pkgRoot, "build");

const babelrc = JSON.parse(
  fs.readFileSync(path.join(pkgRoot, ".babelrc"), {
    encoding: "utf8",
  })
);

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
