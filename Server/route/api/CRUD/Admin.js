const express = require('express')
const router = express.Router()
const Admin = require('../../../model/Admin')
const argon2 = require('argon2')


router.get('/', async (req, res) => {
    let admin = await Admin.find()
    res.send(admin).status(200)
});

router.get('/:id', async (req, res) => {
    const Id = req.params.id
    try {
        let admin = await Admin.findById(Id)
        res.send(admin).status(200)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server Error ");

    }
   
});


router.post('/', async (req, res) => {
    try {
        const { Aname,Aemail,Apassword } = req.body
        const salt = 12
        const hashpassword = await argon2.hash( Apassword, salt)
        let newAdmin = new Admin({
            Aname,
            Aemail,
            Apassword: hashpassword
        })
        await newAdmin.save();
        res.json(newAdmin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error not get values");
    }
});

module.exports = router