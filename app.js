require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const queries = require('./queries.js')

const app = express()
// const tokenManager = require('./token-manager.js')

const cors = require('cors')


//SQL setup/ express config

app.use(cors())
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)


const dbString = process.env.DATABASE_URL
mongoose.connect(dbString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log("MongoDB Connected")
})

//MONGO ROUTE
app.post("/createuser", queries.createUser)

//SQL ROUTE
app.get("/users/:id", queries.userById)



app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000)
console.log("Express is running")