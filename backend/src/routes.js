const express = require('express');
const routes = express.Router();

const TarefasController = require("./controllers/TarefasController");

routes.get('/tarefas', TarefasController.index);

routes.get('/amanha', TarefasController.verAmanha);

routes.get('/emBreve', TarefasController.emBreve);

routes.post('/cadastratarefas', TarefasController.cadastraTarefa);

routes.delete('/deletaTarefa', TarefasController.deletaTarefa);

routes.put('/concluiTarefa', TarefasController.concluiTarefa);

const LembretesController = require("./controllers/LembretesController");

routes.get('/lembretes', LembretesController.index);

routes.post('/cadastralembretes', LembretesController.cadastraLembrete);

module.exports = routes;