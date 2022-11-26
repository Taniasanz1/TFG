const mongoose = require('mongoose')
const { Schema } = mongoose

const MenuSchema = mongoose.Schema({
    day: String,
    breakfast: String,
    dinner: String,
    lunch: String,
    snack: String,
    level: String,
    imgBreakfast: String,
    imgDinner: String,
    imgLunch: String,
    imgSnack: String
})

const MenuModel = mongoose.model('menus', MenuSchema)

module.exports = MenuModel