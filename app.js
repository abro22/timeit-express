require('dotenv').config()
const sgMail = require('@sendgrid/mail');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


const express = require('express')
const mongoose = require('mongoose')
const queries = require('./queries.js')



const app = express()
const tokenManager = require('./tokenmanager.js')

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
    console.log('database error', error)
})

database.once('connected', () => {
    console.log("MongoDB Connected")
})


app.delete("/deleteuser", tokenManager.authenticateToken, queries.deleteUser)

app.put("/updateuser", tokenManager.authenticateToken, queries.updateUser)

app.post('/login', queries.login)

app.post("/clockin", tokenManager.authenticateToken, queries.clockin)

app.post("/postpic", tokenManager.authenticateToken, queries.postPic)
app.get("/getpic", tokenManager.authenticateToken, queries.getPic)
app.post("/clockout", tokenManager.authenticateToken, queries.clockout)

app.get("/gettime", tokenManager.authenticateToken, queries.gettime)

app.post("/register", queries.registerUser)

app.get("/email", tokenManager.authenticateToken, queries.email)




app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000)
console.log("Express is running")