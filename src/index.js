import counter from "./counter.js"
import number from "./number.js"
import hmr from "./css/hmr.css"
// import css from "./css/index.css";
import less from "./css/index.less";
import { add } from "./expo.js"
console.log(add(10, 30))
// import imgless from "./css/css2/img.less";
// import img from "./img/windows.png"
// import axios from "axios"
// axios.get("/api/info").then((res) => {
//     console.log(res)
// })
// const imge = new Image()
// imge.src = img
// const app = document.getElementById('app')
// app.append(imge)
// import React from "react";
// import ReactDom from "react-dom";

// class App extends React.Component {
//   render() {
//     return <div>hello webpack</div>;
//   }
// }

// ReactDom.render(<App />, document.getElementById("app"));
// const aa = [new Promise(() => {}), new Promise(() => {})]

// console.log('aaa')


// 测试webpack钩子 启用命令：node src/index.js
// const config = require("../webpack.config")
// const webpack = require("webpack")

// const compilers = webpack(config)
// Object.keys(compilers.hooks).map(el => {
//     compilers.hooks[el].tap("kkb", () => {
//         console.log(`hook name =======>   ${el}`)
//     })
// })
// compilers.run()

var btn = document.createElement("button")
btn.innerHTML = "新增"
document.body.appendChild(btn)
btn.onclick = function() {
    var div = document.createElement("div")
    div.innerHTML = "item"
    document.body.appendChild(div)
}

counter()
number()
// setTimeout(() => {
//     var span = document.createElement("span")
//     span.innerHTML = "span"
//     document.body.appendChild(span)
// }, 1000)
// var btn = document.createElement("button")
// btn.innerHTML = "新增span"
// document.body.appendChild(btn)
// btn.onclick = function() {
//     var div = document.createElement("span")
//     div.innerHTML = "span"
//     document.body.appendChild(div)
// }
