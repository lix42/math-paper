/* eslint-disable xss/no-mixed-html */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**.{js,jsx}", "!**/tmp/**"],
  coveragePathIgnorePatterns: [".*stories.(?:js|jsx)"],
  coverageReporters: [
    "text",
    "text-summary",
    "cobertura",
    "json-summary",
    "html",
  ],
  coverageDirectory: "build/jest-coverage",
  //TODO: update threshold
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  rootDir: "./",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/*.spec.{js,jsx}"],
  testPathIgnorePatterns: ["tmp", "/node_modules/", "build/", "coverage"],
  testURL: "http://localhost/",
  verbose: true,
  moduleFileExtensions: ["js", "jsx"],
  modulePaths: [
    "<rootDir>/src/modules",
    "<rootDir>/src",
    "<rootDir>/node_modules",
  ],
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss||jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileMock.js",
  },
  setupFiles: ["<rootDir>/configuration/testSetup.js"],
  globals: {
    window: {},
  },
};
