const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    email: String,
    pass: String,
    level: Number,
    isPro: Boolean,
    idSport: Array,
});

const UsersModel = mongoose.model('usuarios', UsersSchema)

module.exports = UsersModel