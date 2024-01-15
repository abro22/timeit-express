const { model } = require("mongoose")
const Model = require("./schema.js")
const Pool = require('pg').Pool
require('dotenv').config()


const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432
})

//MONGO
async function createUser(req, res) {
    const user = new Model({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    console.log("Here")
    const saveUser = await user.save()
    res.status(200).json(saveUser)
}



//SQL
async function userById(req, res) {
    const userid = req.user

    await pool.query('SELECT * FROM users WHERE id = $1', [userid], (error, results) => {

        if (error) {
            throw error
        }
        res.status(200).json(results.rows)

    })
}


module.exports = {
    userById,
    createUser

}