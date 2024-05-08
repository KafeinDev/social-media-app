/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@social-media-app/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
