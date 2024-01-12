// require('dotenv').config()

// const express = require('express')
// // const mongoose = require('mongoose')
// const queries = require('./queries.js')



// // const bodyParser = require('body-parser')
// const app = express()
// const tokenManager = require('./token-manager.js')

// const cors = require('cors')


//SQL setup/ express config

// app.use(cors())
// const bodyParser = require("body-parser")

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000)
console.log("Express is running")