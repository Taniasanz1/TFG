const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
const conn = require("./db/conn");

app.get('/usuarios/:nombre', function (req, res) {
    console.log(req.params.nombre)
    res.send("Adios")
});

app.listen(8081, function () {

    conn.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log('CORS-enabled web server listening on port 8081')
});