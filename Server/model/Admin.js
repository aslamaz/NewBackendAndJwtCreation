const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    Aname: {
        type: String,
        required: true,
    },
    Aemail: {
        type: String,
        required: true,
    },
    Apassword: {
        type: String,
        required: true,
    }
})

module.exports = modelAdmin = mongoose.model("Admintbl", adminSchema)