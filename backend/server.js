setInterval(function() {
    var data = new Date();
    console.log(data);
}, 1000)
// const express = require('express');
// const mongoose = require('mongoose');
// const requireDir = require('require-dir');

// // Iniciando o App
// const app = express();

// app.use(express.json());

// // Iniciando o DB
// mongoose.connect(
    
//     'mongodb+srv://iagoAdm:1234@baudelivros.d0gmo.gcp.mongodb.net/bauDeLivros?retryWrites=true&w=majority', 
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const db = mongoose.connection;
  
// db.on('connected', () => {
//     console.log('Mongoose default connection is open');
// });

// db.on('error', err => {
//     console.log(`Mongoose default connection has occured \n${err}`);
// });
// requireDir('./src/models');

// // Rotas
// app.use('/api', require('./src/routes'));

// app.listen(4567);