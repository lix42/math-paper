const defaultPresets = ["@babel/preset-flow", "@babel/preset-react"];
const nodeEnv = { node: "current" };
const narrowBrowserEnv = {
  browsers: ["last 1 Chrome versions", "last 1 Firefox versions"],
};
const broadBrowserEnv = {
  browsers: [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Edge versions",
    "last 2 Safari versions",
    "last 2 Android versions",
    "last 2 ChromeAndroid versions",
  ],
};
const configEnvPreset = (targets, otherOptions) => [
  "@babel/preset-env",
  {
    targets: targets,
    useBuiltIns: "entry",
    ...otherOptions,
  },
];
const configPresets = (targets, otherOptions) => [
  ...defaultPresets,
  configEnvPreset(targets, otherOptions),
];
const defaultPlugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  "syntax-dynamic-import",
  "@babel/plugin-transform-react-display-name",
  "macros",
  [
    "@babel/plugin-transform-runtime",
    {
      helpers: true,
    },
  ],
];

module.exports = {
  env: {
    test: {
      presets: configPresets(nodeEnv),
      plugins: [...defaultPlugins, "@babel/plugin-transform-react-jsx-source"],
    },
    development: {
      presets: configPresets(narrowBrowserEnv, {
        modules: false,
        debug: true,
      }),
      plugins: [
        ...defaultPlugins,
        "@babel/plugin-transform-react-jsx-source",
        "react-hot-loader/babel",
      ],
    },
    production: {
      presets: configPresets(broadBrowserEnv, {
        modules: false,
      }),
      plugins: [
        ...defaultPlugins,
        "@babel/plugin-transform-react-constant-elements",
      ],
    },
  },
};
