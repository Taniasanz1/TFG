const express = require('express');
const router = express.Router();

const Menus = require('../models/menus.model');

router.get('/menus', async (req, res) => {
    const menus = await Menus.find();
    res.send({ menus })
})



module.exports = router;