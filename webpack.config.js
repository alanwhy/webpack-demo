const path = require("path");

module.exports = {
  mode: "production", // development
  entry: {
    main: "./src/index.js"
  },
  // 符合规则 去找loader去解决打包问题
  module: {
    rules: [{
      test: /\.jpg/,
      use: {
        loader: "file-loader"
      }
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}