const express = require('express');
const router = express.Router();

const Sports = require('../models/sports.model');

router.get('/sports', async (req, res) => {
    const sports = await Sports.find();
    res.send({ sports })
})


module.exports = router;