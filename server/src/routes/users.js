const express = require('express');
const router = express.Router();

const Users = require('../models/users.model');


router.post('/users', async (req, res) => {
    const user = new Users(req.body.user);
    console.log(req.body.user);
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
    const userDB = await Users.findOneAndUpdate({ email }, { isPro: true });
    const response = userDB == null ? { user: null } : { user: userDB };
    res.send(response);
})



module.exports = router;
