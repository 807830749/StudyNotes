// webpack基于node环境开发的工具
const path = require('path') // node 核心模块
const htmlwebpackplugin = require('html-webpack-plugin') // 自动生成html插件 关联资源文件
const MiNiCssExtractPlugin = require('mini-css-extract-plugin') // 把css抽离成独立的文件

// chunk: 代码片段，一个模块就生成一个chunk
// bundle: dist里打包好的资源文件，由一个或多个chunk组成
module.exports = {
	// 单页面spa应用配置入口
	// entry: './src/index.js', // 入口文件 等价于entry: {main: './src/index.js'},
	// mpa多页面应用配置入口需用对象形式来指定多个入口文件
	entry: {
		wdx: './src/index.js'
	},
	output: {
		// filename: 'js/[name].js', // 需要目录划分
		filename: 'js/[name].js', // 输出的文件叫什么名字 [name]是占位符，name等于entry里的key值
		path: path.resolve(__dirname, './dist'), // 输出的资源存放位置，是绝对路径
		//publicPath: "http://www.baidu.com" 
	},
	mode: 'development', // 打包模式：production, development, none
	resolveLoader: { // loader的解析地址，默认是去node_modules模块里面找
		modules: ['./node_modules', './myLoaders']
	},
	// loader webpack默认只支持js json模块，loader是让webpack识别并处理除js json外的文件，是模块解析器
	// css-loader：让webpack支持css语句，并序列化
	// style-loader：生成<style></style>标签，并把序列化的css文件挂载到页面头部
	// less-loader 把less语法转换成css语法,使用less-loader时需要安装less，因为less-loader在进行语法转换时依赖了less。sass、stylus等也是同理
	// postcss postcss-loader 使用postcss处理css
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			// {
			// 	test: /\.less$/,
			// 	use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
			// },
			{
				test: /\.less$/,
				use: [
					MiNiCssExtractPlugin.loader,
					"css-loader",
					// {
					// 	loader: "css-loader",
					// 	options: {}
					// },
					"postcss-loader",
					"less-loader"
				]
			},
			// {
			// 	test: /\.less$/,
			// 	use: [
			// 		"wdx-style-loader",
			// 		"wdx-css-loader",
			// 		// "postcss-loader",
			// 		"wdx-less-loader"
			// 	]
			// },
			// {
			// 	test: /\.js$/,
			// 	use: [// 多个loader使用注意顺序：自下而上，自右向左
			// 		// path.resolve(__dirname, "./myLoaders/replace-loader-2"),
			// 		"replace-loader-2",
			// 		{
			// 			// loader: path.resolve(__dirname, "./myLoaders/replace-loader"),
			// 			loader: "replace-loader",
			// 			options: {
			// 				name: 'wdx'
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				use: {
					loader: "file-loader",
					options: {
						// name: 图片的名称
						// ext: 图片的后缀格式
						name: "[name].[ext]",
						outputPath: "images", // 图片的存放路径
						publicPath: "../images/" // 图片的引用路径，即css中使用的图片的路径
					}
				}
			}
		]
	},
	plugins: [
		new htmlwebpackplugin({
			template: "./src/index.html", // 生成html时的参考模板
			filename: "wdx.html", // 生成的html叫什么名字
			chunks: ["wdx"] // 需要关联的文件，值是entry的key
		}),
		new MiNiCssExtractPlugin({ // 把css抽离成独立的文件
			//filename: "css/[name].css", // 需要进行目录划分
			filename: "css/[name].css", // 生成的文件名称
		})
	]
}