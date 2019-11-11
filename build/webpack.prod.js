const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production", // development production
  devtool: "cheap-module-source-map"
}

module.exports = merge(commonConfig, prodConfig)