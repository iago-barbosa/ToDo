const mongoose = require('mongoose');

const LembretesSchema = new mongoose.Schema({
    titulo:{
        type: String, 
        required: true
    },
    texto:{
        type: String,
        required: true 
    },
    dataCriacao:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true
    },
});

mongoose.model('Lembretes', LembretesSchema, 'Lembretes');