const express = require('express')
const bodyParser = require('body-parser')
const cors  = require('cors')
const connectDB = require('./config/db')
// import jwt from 'jsonwebtoken'


const app = express()
const PORT = process.env.PORT || 5000

//middle ware you can use Express.json also
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connectDB()

const routeAdmin = require('./route/api/CRUD/Admin')
const loginRoute = require('./route/api/CRUD/Login')

//calling path of Admin Eg:-http://localhost:6000/Admin
app.use('/Admin',routeAdmin)
app.use('/Login',loginRoute)



app.listen(PORT,()=>console.log(`server started on port ${PORT}`))