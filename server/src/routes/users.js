const express = require('express');
const router = express.Router();

const Users = require('../models/users.model');


router.post('/users', async (req, res) => {
    const user = new Users(req.body.user);
    await user.save();
    res.send(user);
})


router.get('/users/:email', async (req, res) => {
    const email = req.params.email;
    const userDB = await Users.findOne({ email });
    const response = userDB == null ? { user: null } : { user: userDB };
    res.send(response);
})


router.put('/users/:email', async (req, res) => {
    const email = req.params.email;
    const userDB = await Users.findOneAndUpdate({ email }, { "$push": { idSport: req.body.idSport } });
    const response = userDB == null ? { user: null } : { user: userDB };
    res.send(response);
})


router.put('/users/:email', async (req, res) => {
    const email = req.params.email;
    const userDB = await Users.findOneAndUpdate({ email }, { "$push": { calorias: req.body.calorias } });
    const response = userDB == null ? { user: null } : { user: userDB };
    res.send(response);
})

module.exports = router;
