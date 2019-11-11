const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [{
      // es5语法翻译
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
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
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
      // 配置模板
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
}