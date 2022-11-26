const mongoose = require('mongoose')


const password = 'Estaesmibbdd2468'
const dbname = 'yumming'
const uri = `mongodb+srv://taniasanz:${password}@clusteryumming.tkuhbpf.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri)

mongoose.Promise = global.Promise;

const db = mongoose.connection

module.exports = db