// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript", // If using TypeScript
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
