const path = require("path");

module.exports = {
  mode: "production", // development
  entry: {
    main: "./src/index.js"
  },
  // 符合规则 去找loader去解决打包问题
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          // 保证打包后名称一致 placeholder 占位符
          name: "[name]_[hash].[ext]",
          outputPath: "images/",
          // 限制大包大小 单位是kb
          limit: 10240
        }
      }
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}