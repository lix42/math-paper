module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 6,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jest", "jsx-a11y", "prettier", "promise", "react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    quotes: "off",
    semi: "off",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-extra-boolean-cast": "off",
    "no-shadow": ["error", { hoist: "all" }],
    "prefer-const": "error",
    "react/no-danger": "error",
    "react/no-find-dom-node": "warn",
  },
  settings: {},
};
