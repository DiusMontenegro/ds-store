const { createRequire } = require("module");
const require = createRequire(import.meta.url);

require("ts-node").register();

module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  arrowParens: "always",
  pluginSearchDirs: ["."],
  printWidth: 100,
  bracketSameLine: true,
};
