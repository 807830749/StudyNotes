const { json } = require("express")

class ListWbpackPlugin {
    constructor(options) {
		this.options = options
    }
    apply(compile) {
			compile.hooks.emit.tapAsync("ListWbpackPlugin", (compilation, cb) => {
				const arr = Object.keys(compilation.assets)
				compilation.assets[`${this.options.name}.txt`] = {
					source: function() {
						let list = {}
						for(const i in arr) {
							list[i] = arr[i]
						}
						return JSON.stringify(list)
					},
					size: function() {
						return 10
					}
				}
				cb()
			})
		}
}
module.exports = ListWbpackPlugin