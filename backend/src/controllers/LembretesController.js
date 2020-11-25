const mogoose = require('mongoose');

const Lembretes = mogoose.model('Lembretes');

module.exports = {
    async index(req, res) {
        const lembretes = await Lembretes.find().sort({dataCriacao: -1});
        return res.json(lembretes);
    },

    async verLembretes(req, res){
        const { _id} = req.params;
        const lembretes = await Lembretes.findById(_id);
        return res.json([lembretes]);
    },

    async cadastraLembrete(req, res) {
        try {
            
            console.log(req.body);
            const lembrete = await Lembretes.create(req.body);

            return res.send({lembrete});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao inserir nova tarefa', err: error})
        }
    },

    async deletarLembrete(req, res) {
        try {
            var {_id} = req.body;  
            console.log(_id._id);
            await Lembretes.findByIdAndRemove(_id._id);

            return res.send({message: 'ok'});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao editar lembrete', err: error})
        }
    },
};