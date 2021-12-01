// 插件的格式
class TxtWebpackPlugin {
	constructor(options) {
		console.log(options)
	}
	// 通过apply函数把插件勾入到相应的钩子上
	apply(compiler) {
		// 异步钩子 tapAsync callback
		// compiler.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
		// 	// compilation 当前步骤webpack把资源处理的阶段成果
		// 	// cb回调函数，必须在末尾调用
		// 	// console.log(compilation.assets) // 将要往目标文件输出的文件对象
		// 	compilation.assets['wdx.txt'] = {
		// 		source: function() {
		// 			return 'hello kkb !!!'
		// 		},
		// 		size: function() {// 不是要输出的文件的真实大小，只是在git打包页面看的
		// 			return 1
		// 		}
		// 	}
		// 	cb()
		// }) // 钩子的api


		// 同步钩子 tap
		compiler.hooks.compile.tap("TxtWebpackPlugin", (compilation) => {
			console.log(compilation)
		})
	}
}
module.exports = TxtWebpackPlugin