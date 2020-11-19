const express = require('express');
const routes = express.Router();

const TarefasController = require("./controllers/TarefasController");

routes.get('/tarefas', TarefasController.index);

routes.post('/cadastratarefas', TarefasController.cadastraTarefa);

const LembretesController = require("./controllers/LembretesController");

routes.get('/lembretes', LembretesController.index);

routes.post('/cadastralembretes', LembretesController.cadastraLembrete);

module.exports = routes;