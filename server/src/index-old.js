// const express = require('express');
// const cors = require('cors');
// const app = express();
// require("dotenv").config({ path: "./config.env" });
// const mongoose = require('mongoose');
// app.use(cors());
// app.use(express.json());
// const conn = require("./db/conn");

// app.get('/usuarios/:nombre', function (req, res) {
//     console.log(req.params.nombre)
//     res.send("Adios")
// });




// mongoose.connect(process.env.MONGODB_URL).then(function (res) {

//     app.listen(8081, function () {

//         conn.connectToServer(function (err) {
//             if (err) console.error(err);

//         });
//         console.log('CORS-enabled web server listening on port 8081')
//     })
// }


// )

const http = require('http')

//req = request -> peticion del ciente
//res = response ->respuesta de servidor
//cliente = navegador
const server = http.createServer((req, res) => {
    console.log('Un cliente se ha conectado')
    //para solucionar el tema de codificación de caracteres
    // res.writeHead(200, { "Content-Tye": "text/html; charset=utf-8" })
    // res.write('La conexión ha sido correcta');
    res.end('La conexión ha sido correcta')
})

server.listen(8081, () => {
    console.log('Servidor a la espera de conexiones')

})