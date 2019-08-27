// ES Moudele 模块引入方式
// CommonJS 模块引入规范
// CMD
// ADM
// webpack 模块打包工具
// js 模块打包工具 -> css png等

// import Header from "./header.js"
// import avatar from "./avatar.jpg";
// import style from "./index.scss"
// import createAvatar from "./createAvatar.js"

// createAvatar();

// var img = new Image();
// img.src = avatar;
// img.classList.add(style.avatar)

// var root = document.getElementById("root")
// root.append(img)


// var Header = require("./header.js");
// var avatar = require("./avatar.jpg");

// console.log(avatar)
// var style = require("./index.css");
// import style from "./index.css"

// new Header()

var root = document.getElementById("root");
import "./index.scss";

root.innerHTML = "<div class='iconfont iconarrowb'></div>"