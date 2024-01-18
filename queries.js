const { model } = require("mongoose")
const Pool = require('pg').Pool
require('dotenv').config()

const tokenManager = require('./tokenmanager.js')

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432
})

//SQL

async function getAllUsers(req, res) {

    await pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).json(results.rows)
    })
}

async function registerUser(req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, password, email], (error, results) => {

        if (error) {
            throw error
        }

        res.status(201).send('user added')
    })

}

async function deleteUser(req, res) {
    const userid = req.user
    await pool.query("DELETE FROM users WHERE id = $1", [userid], (error, results) => {
        if (error) {
            throw error
        }
    })
    res.status(200).send(`User ID: ${userid} has been deleted`)
}

async function updateUser(req, res) {

    const userid = req.user

    const username = req.body.name
    const email = req.body.email
    const password = req.body.password


    await pool.query('UPDATE users SET username = $1, email = $2, password $3 WHERE id = $4', [username, email, password, userid], (error, results) => {
        if (error) {
            throw error
        }
    })
    res.status(200).send(`User ID: ${userid} was modified`)

}

async function login(req, res) {
    const email = req.body.email
    const password = req.body.password

    console.log(email, password)

    await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
        if (error) {
            throw error
        }

        console.log(results.rows)

        const token = tokenManager.generateToken(results.rows[0].id)

        res.status(200).json(token)
    })


}

// async function profileById(req, res) {
//     const userid = req.user

//     await pool.query('SELECT * FROM users WHERE id = $1', [userid], (error, results) => {

//         if (error) {
//             throw error
//         }


//         res.status(200).json(results.rows)

//     })
// }

module.exports = {
    // profileById,
    registerUser,
    deleteUser,
    updateUser,
    login,
    getAllUsers


}