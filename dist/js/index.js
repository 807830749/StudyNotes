/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import css from \"./css/index.css\";\n// import less from \"./css/index.less\";\n// import imgless from \"./css/css2/img.less\";\n// import img from \"./img/windows.png\"\n// import axios from \"axios\"\n// axios.get(\"/api/info\").then((res) => {\n//     console.log(res)\n// })\n// const imge = new Image()\n// imge.src = img\n// const app = document.getElementById('app')\n// app.append(imge)\n// import React from \"react\";\n// import ReactDom from \"react-dom\";\n// class App extends React.Component {\n//   render() {\n//     return <div>hello webpack</div>;\n//   }\n// }\n// ReactDom.render(<App />, document.getElementById(\"app\"));\n// const aa = [new Promise(() => {}), new Promise(() => {})]\n// console.log('aaa')\n// 测试webpack钩子 启用命令：node src/index.js\n// const config = require(\"../webpack.config\")\n// const webpack = require(\"webpack\")\n// const compilers = webpack(config)\n// Object.keys(compilers.hooks).map(el => {\n//     compilers.hooks[el].tap(\"kkb\", () => {\n//         console.log(`hook name =======>   ${el}`)\n//     })\n// })\n// compilers.run()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY3NzIGZyb20gXCIuL2Nzcy9pbmRleC5jc3NcIjtcclxuLy8gaW1wb3J0IGxlc3MgZnJvbSBcIi4vY3NzL2luZGV4Lmxlc3NcIjtcclxuLy8gaW1wb3J0IGltZ2xlc3MgZnJvbSBcIi4vY3NzL2NzczIvaW1nLmxlc3NcIjtcclxuLy8gaW1wb3J0IGltZyBmcm9tIFwiLi9pbWcvd2luZG93cy5wbmdcIlxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuLy8gYXhpb3MuZ2V0KFwiL2FwaS9pbmZvXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4vLyB9KVxyXG4vLyBjb25zdCBpbWdlID0gbmV3IEltYWdlKClcclxuLy8gaW1nZS5zcmMgPSBpbWdcclxuLy8gY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbi8vIGFwcC5hcHBlbmQoaW1nZSlcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3REb20gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gPGRpdj5oZWxsbyB3ZWJwYWNrPC9kaXY+O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gUmVhY3REb20ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuLy8gY29uc3QgYWEgPSBbbmV3IFByb21pc2UoKCkgPT4ge30pLCBuZXcgUHJvbWlzZSgoKSA9PiB7fSldXHJcblxyXG4vLyBjb25zb2xlLmxvZygnYWFhJylcclxuXHJcblxyXG4vLyDmtYvor5V3ZWJwYWNr6ZKp5a2QIOWQr+eUqOWRveS7pO+8mm5vZGUgc3JjL2luZGV4LmpzXHJcbi8vIGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi93ZWJwYWNrLmNvbmZpZ1wiKVxyXG4vLyBjb25zdCB3ZWJwYWNrID0gcmVxdWlyZShcIndlYnBhY2tcIilcclxuXHJcbi8vIGNvbnN0IGNvbXBpbGVycyA9IHdlYnBhY2soY29uZmlnKVxyXG4vLyBPYmplY3Qua2V5cyhjb21waWxlcnMuaG9va3MpLm1hcChlbCA9PiB7XHJcbi8vICAgICBjb21waWxlcnMuaG9va3NbZWxdLnRhcChcImtrYlwiLCAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYGhvb2sgbmFtZSA9PT09PT09PiAgICR7ZWx9YClcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcbi8vIGNvbXBpbGVycy5ydW4oKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });