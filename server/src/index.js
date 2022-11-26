const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')



//create express app
const app = express()



// Handle CORS + middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})



//database connection with mongoose
const db = require('./dbConnection/connection')
db.on('connected', function () {
    console.log("DB DONE");
})

db.on('error', function (err) {
    console.log('DB error' + err);
})


//routes

app.get('/', function (req, res) {
    res.json({ mensaje: 'Página home' })
})

app.use(require('./routes/menus'));
app.use(require('./routes/users'));


app.listen(8081, () => {
    console.log('Servidor escuchando por 8081')

})