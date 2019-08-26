// ES Moudele 模块引入方式
// CommonJS 模块引入规范
// CMD
// ADM
// webpack 模块打包工具
// js 模块打包工具 -> css png等

// import Header from "./header.js"
import avatar from "./avatar.jpg"
import "./index.scss"

var img = new Image();
img.src = avatar;
img.classList.add("avatar")

var root = document.getElementById("root")
root.append(img)
// var Header = require("./header.js");
// var avatar = require("./avatar.jpg");

// console.log(avatar)
// var style = require("./index.css");
// import style from "./index.css"

// new Header()