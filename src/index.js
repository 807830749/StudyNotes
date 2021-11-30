import css from "./css/index.css";
import less from "./css/index.less";
import imgless from "./css/css2/img.less";
import img from "./img/windows.png"
const imge = new Image()
imge.src = img
const app = document.getElementById('app')
app.append(imge)
console.log('aaa')