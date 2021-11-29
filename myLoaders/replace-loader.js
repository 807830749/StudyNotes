// loader的结构：不能是箭头函数
//通过source接收模块内容
// loader必须有返回值
// loader是可以接收参数和配置的, 在this.query对象里
// 如何返回多个信息
// this.callback(
// 	err,
// 	content,
// 	sourcemap,
// 	something
// )
// 如何处理异步逻辑 this.async()
module.exports = function(source) {
	console.log(source)
	// return source.replace('aaa', 'ccc')
	// return source.replace('aaa', this.query.name)
	// const content = source.replace('aaa', `${this.query.name} 的第一个loader`)
	// this.callback(null, content)
	// 处理异步逻辑
	const callback = this.async()
	setTimeout(() => {
		const content = source.replace('aaa', `${this.query.name} 的第一个异步loader`)
		callback(null, content)
	}, 3000)
}