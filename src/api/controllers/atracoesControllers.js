const Atracoes = require('../models/atracoesModels.js')
const Cidades = require('../models/cidadesModels.js')
const { index } = require('./cidadesControllers.js')
const { update } = require('./cidadesControllers.js')

module.exports = {
    //Busca todos os registros de atrações
    async indexAll(req, res){
        const atracoes = await Atracoes.findAll()
        return res.json(atracoes)
    },

    //Busca um registro
    async index(req, res) {
        const {
            cidade_id
        } = req.params
        console.log('Parametro atracoes esperado ' + cidade_id)

        const atracoes = await Cidades.findByPk(cidade_id, {
            include: {
                association: 'cidade'
            }
        })

        return res.json(atracoes)

    },

    //grava um registro
    async store(req, res) {
        const {cidade_id} = req.params
        const {
            atr_nome,
            atr_local,
            atr_tipo,
            atr_acesso
        } = req.body

        console.log('Parametro esperado: ' + cidade_id)
        console.log('Dados: ' + req.body)
        // validar a cidade
        const cidade = await Cidades.findByPk(cidade_id)

        if (!cidade) {
            return res.status(400).json({
                error: 'Cidade não encontrada!'
            })
        }
        const atracoes = await Atracoes.create({
            cidade_id,
            atr_nome,
            atr_local,
            atr_tipo,
            atr_acesso,
        });

        return res.json(atracoes);
    },

    //atualiza um registro
    async update(req, res) {
        const {atracoes_id} = req.params
        const {
            atr_nome,
            atr_local,
            atr_tipo,
            atr_acesso,
            cidade_id
        } = req.body

        await Atracoes.update({
            atr_nome,
            atr_local,
            atr_tipo,
            atr_acesso,
            cidade_id
        }, {
            where: {
                id: atracoes_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Atração atualizada com sucesso!"
        })
    },

    //deletar um registro
    async delete(req, res){
        const { atracoes_id } = req.params

        // validar atracao
        const atracoes = await Atracoes.findByPk(atracoes_id)
        if(!atracoes){
            return res.status(400).json({error: "Atração não encontrada"})
        } else{
            console.log("Atração encontrada")
        }

        //deletar atracao
        await Atracoes.destroy({
            where: {
                id: atracoes_id
            }       
        })   

        return res.status(200).send({
            status: 1,
            message: "Atração deletada com sucesso!!!",
            atracoes
        })
    }
    
}