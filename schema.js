const mongoose = require('mongoose');


//CREATE USER
const createUser = new mongoose.Schema({

    name: {
        required: true,
        type: String
    },

    age: {
        required: true,
        type: Number

    },

    email: {
        required: true,
        type: String

    }


})
