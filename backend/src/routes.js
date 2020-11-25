const express = require('express');
const routes = express.Router();

const TarefasController = require("./controllers/TarefasController");

routes.get('/tarefas', TarefasController.index);

routes.get('/verTarefas/:_id', TarefasController.verTarefas);

routes.get('/amanha', TarefasController.verAmanha);

routes.get('/emBreve', TarefasController.emBreve);

routes.post('/cadastratarefas', TarefasController.cadastraTarefa);

routes.post('/deletaTarefa', TarefasController.deletaTarefa);

routes.put('/concluiTarefa', TarefasController.concluiTarefa);

const LembretesController = require("./controllers/LembretesController");

routes.get('/lembretes', LembretesController.index);

routes.get('/verLembretes/:_id', LembretesController.verLembretes);

routes.post('/cadastrarLembrete', LembretesController.cadastraLembrete);

routes.post('/deletaLembrete', LembretesController.deletarLembrete);

module.exports = routes;