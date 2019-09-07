const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const webpack = require("webpack");


// plugin 可以在webpack运行到某个时候 进行一些事情

module.exports = {
  mode: "development", // development production
  // 查看源文件的位置，source-map为打包后的代码与源代码的映射关系
  // 线上代码一般使用 production devtool: "cheap-module-source-map"
  // 如果是开发环境的话 development devtool: "cheap-module-eval-source-map"
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: "./src/index.js"
  },
  // webpack-dev-server的相关配置
  devServer: {
    // 服务器地址访问目录
    contentBase: "./dist",
    // 自动打开浏览器
    open: true,
    port: 8080,
    // HMR
    hot: true,
    hotOnly: true
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
  },
  // 符合规则 去找loader去解决打包问题
  module: {
    rules: [{
      // es5语法翻译
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", {
            // 对浏览器进行项目运行的控制打包
            targets: {
              // edge: "17",
              // firefox: "60",
              chrome: "67",
              // safari: "11.1"
            },
            // 根据业务代码进行es5的翻译 减少代码体积
            useBuiltIns: "usage"
          }],
        ]
      }
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
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
}