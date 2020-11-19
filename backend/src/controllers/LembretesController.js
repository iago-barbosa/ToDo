const mogoose = require('mongoose');

const Lembretes = mogoose.model('Lembretes');

module.exports = {
    async index(req, res) {
        const lembretes = await Lembretes.find().sort({dataCriacao: -1});

        return res.json(lembretes);
    },

    async cadastraLembrete(req, res) {
        try {

            const lembretes = await Lembretes.create(req.body);

            return res.send({lembretes});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao inserir novo lembrete', err: error})
        }
    },
};