module.exports = {
  extends: ["@callstack/eslint-config/react","plugin:react/jsx-runtime"],
  rules: {
    "prettier/prettier": ["error", { trailingComma: "none" }]
  }
}