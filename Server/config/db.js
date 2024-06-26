const mongoose = require('mongoose')
const config = require('config')
const DB = config.get('mongooseURL')

const connectDB = async () => {
    try {
        await mongoose.connect(DB)
        console.log("DB connection Established");
    } catch (err) {
        console.error(err.message)
        process.exit(1);

    }
}

module.exports = connectDB;