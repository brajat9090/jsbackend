require('dotenv').config()

const express = require('express')

const app = express() // this app contains all the express functions

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("hello rajat from twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>Login not</h2>")
})

app.get("/youtube"), (req, res) => {
    res.send("<h2>Youtube from hi</h2>")
}

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
