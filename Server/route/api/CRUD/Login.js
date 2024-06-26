const express = require('express')
const Joi = require('joi')
const router = express.Router()
const Admin = require('../../../model/Admin')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const config = require('config')

const loginShema = Joi.object({
    Adminemail: Joi.string().email()
    .messages({
        'string.email': 'Please provide a valid email address with a .com or .net domain.',
        'string.empty': 'Email field cannot be empty.'
    }),
    Adminpassword: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})

router.post('/', async (req, res) => {
    const email = req.body.Adminemail;
    const password = req.body.Adminpassword;
   
    const { error } = loginShema.validate(req.body)
    console.log(req.body);
    if (error) {
        console.log("haii error");
        return res.status(400).json({ error: error.details })
    }

   
   
    try {
        const admin = await Admin.findOne({ Aemail:email })
       
        if (!admin) {
           
            return res.status(400).json({ error: 'Invalid credential' })
        }

        // Verify the password for the corresponding user 
        let isValidPassword = false
        let adminData = ""

        if (admin) {
           
            isValidPassword = await argon2.verify(admin.Apassword, password)
            adminData = admin
        }
       
        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid credentials' })
        }

        // Generate JWT token for the authenticated admin
        const payload = {
            Aadmin: {
                id: adminData._id,
            },
            userType: admin ? 'admin' : null,
        }
        

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err
                console.log({ token });
                res.json({ token })
            }
        )
        

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }


})

module.exports = router