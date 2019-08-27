const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

// plugin 可以在webpack运行到某个时候 进行一些事情

module.exports = {
  mode: "production", // development
  entry: {
    main: "./src/index.js",
    sub: "./src/index.js"
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
    }, {
      test: /\.scss$/,
      use: ["style-loader", {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          // 开启css的模块化打包
          // modules: true
        }
      }, "sass-loader", "postcss-loader"]
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: "file-loader"
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    // 配置模板
    template: "src/index.html"
  }), new CleanWebpackPlugin()],
  output: {
    publicPath: "http://cdn.com.cn",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
}