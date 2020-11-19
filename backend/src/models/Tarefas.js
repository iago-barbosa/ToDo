const mongoose = require('mongoose');

const TarefasSchema = new mongoose.Schema({
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
    dataEntrega: {
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true
    },
});

mongoose.model('Tarefas', TarefasSchema, 'Tarefas');