const mogoose = require('mongoose');

const Tarefas = mogoose.model('Tarefas');

module.exports = {
    async index(req, res) {
        const tarefas = await Tarefas.find().sort({dataEntrega: -1});

        return res.json(tarefas);
    },

    async cadastraTarefa(req, res) {
        try {

            const tarefas = await Tarefas.create(req.body);

            return res.send({tarefas});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao inserir nova tarefa', err: error})
        }
    },
};