// 创建style标签，并挂载到head
module.exports = function(resource) {
    return `
        const tag = document.createElement("style")
        tag.innerHTML = ${resource}
        document.head.appendChild(tag)
    `
}