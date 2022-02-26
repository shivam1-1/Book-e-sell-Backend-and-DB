const express = require('express');
const router = express.Router();
const User = require('../models/register');

router.post('/', (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email, password: password }, (err, user) => {
        if (user) {
            res.send({ message: 'Successfully Logged In' })
        } else {
            res.send({ message: 'Enter valid email and password' })
        }
    })
})
module.exports = router;
