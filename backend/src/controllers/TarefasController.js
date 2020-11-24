const mogoose = require('mongoose');

const Tarefas = mogoose.model('Tarefas');

module.exports = {
    async index(req, res) {
        var data = new Date();
        var dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 

        console.log(dataFormatada)
        const tarefas = await Tarefas.find({dataEntrega: dataFormatada}).sort({dataEntrega: -1});
        console.log(tarefas);
        return res.json(tarefas);
    },

    async verAmanha(req, res) {
        var data = new Date();
        data.setDate(data.getDate() + 1);
        var dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 


        const tarefas = await Tarefas.find({dataEntrega: dataFormatada}).sort({dataEntrega: -1});

        return res.json(tarefas);
    },

    async emBreve(req, res) {

        const tarefas = await Tarefas.find().sort({dataEntrega: -1});

        return res.json(tarefas);
    },


    async cadastraTarefa(req, res) {
        try {
            
            console.log(req.body);
            const tarefas = await Tarefas.create(req.body);

            return res.send({tarefas});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao inserir nova tarefa', err: error})
        }
    },

    async editTarefa(req, res) {
        try {
            const { _id } = req.body;
            console.log('aqui');
            console.log(_id);
            const tarefas = await Tarefas.findByIdAndUpdate({_id: _id, status: '2'})

            return res.send({tarefas});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao deletar lembrete', err: error})
        }
    },

    async deletaTarefa(req, res) {
        try {
            var {_id} = req.body;  
            console.log(_id);
            await Tarefas.findByIdAndRemove(_id);

            return res.send({message: ok});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao editar lembrete', err: error})
        }
    },

    async concluiTarefa(req, res) {
        try {
            const { _id } = req.body;
            console.log('aqui');
            console.log(_id);
            const tarefas = await Tarefas.findByIdAndUpdate({_id: _id}, {status: '2'})

            return res.send({tarefas});
        } catch (error) {
            return res.status(400).send({error: 'Falha ao deletar lembrete', err: error})
        }
    },
};