const mongoose = require('mongoose')
const { Schema } = mongoose

const SportSchema = mongoose.Schema({
    name: String,
    img: String,
    idSport: String,
    price: String,
    bodyParts: String,
    duration: String,
    difficulty: String
})

const SportsModel = mongoose.model('entrenamientos', SportSchema)

module.exports = SportsModel