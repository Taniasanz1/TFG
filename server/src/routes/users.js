const express = require('express');
const router = express.Router();

const Users = require('../models/users.model');

router.get('/users', async (req, res) => {
    const users = await Users.find();
    console.log(users);
    res.send(users);
})

router.get('/users/:id', async (req, res) => {
    const usuarioDB = await Users.findOne({ email: body.email });
    res.send(usuarioDB);
})

router.post('/users', async (req, res) => {
    const user = new Users(req.body.user);
    console.log(req.body.user);
    await user.save();
    res.send(user);
})


router.put('/users/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.send();
})

module.exports = router;