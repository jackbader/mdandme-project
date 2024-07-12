module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parser: "@typescript-eslint/parser",
  settings: {
    "import/extensions": [".ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      paths: ['./*'],
      node: {
        extensions: [".ts"],
      },
    },
  },
};
