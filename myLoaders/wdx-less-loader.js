// less to css
const less = require("less")
module.exports = function(resource) {
    less.render(resource, (err, result) => {
       this.callback(err, result.css)
    })
}