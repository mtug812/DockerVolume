const express = require("express")
const fs = require("fs")
const app = express()


app.get("/", (req,res) => {
    let logEntry = `Zugriff am ${new Date()}\n` 
    fs.appendFileSync("logs/zugriffe.log", logEntry)
    res.send("Log wurde gespeichert!")
})


app.listen(5010)