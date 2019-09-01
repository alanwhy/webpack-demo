// 类似于webpack-dev-server的服务器
// 借助express和webpack-dev-middleware来进行编写服务器
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
// 编译器
const complier = webpack(config);

const app = express();
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath,
}))

app.listen(3000, () => {
  console.log("server is running");
})