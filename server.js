const express = require("express")
const app = express()
app.get("/app/info", (req, res) => {
    res.json({name: "kaikeba"})
})
app.listen("9092")