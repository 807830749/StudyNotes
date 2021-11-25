module.exports = {
	plugins: [
		require("autoprefixer"), // 需指定浏览器环境，即浏览器版本
		require("cssnano"), // 对css进行压缩
	]
}