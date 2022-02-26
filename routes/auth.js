const express = require('express');
const router = express.Router();
const User = require('../models/register');




router.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: 'User Already exists' })
        } else {
            const user = new User({
                firstName,
                lastName,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: 'Sucessfully Registered' })
                }
            })
        }
    })
})
module.exports = router;
