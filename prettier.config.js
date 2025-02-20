const { createRequire } = require("module");
// No need to redefine `require` since it is already available in CommonJS modules.

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
    printWidth: 120,
    bracketSameLine: true,
};
