const Cidades = require('../models/cidadesModels.js')

module.exports = {
    //Busca todos os registros de cidades
    async indexAll(req, res) {
        const cidades = await Cidades.findAll();
        return res.json(cidades)
    },

    //busca um registro pelo id
    async index(req, res){
        const {cidade_id} = req.params
        console.log('Parâmetro cidade esperado ' + cidade_id)
        const cidades = await Cidades.findByPk(cidade_id)
        return res.json(cidades)    
    },

    //novo registro de cidade
    async store(req, res) {
        const {cid_nome, cid_estado, cid_regiao, cid_pais, cid_continente} = req.body
        const cidade = await Cidades.create({
            cid_nome, 
            cid_estado, 
            cid_pais, 
            cid_regiao,
            cid_continente
        });
        return res.status(200).send({
            status: 1,
            message: 'Cidade cadastrada com sucesso!!!',
            cidade
        })
    },

    //atualiza um registro
    async update(req, res){
        const {cidade_id} = req.params
        const {cid_nome, cid_estado, cid_regiao, cid_pais, cid_continente} = req.body
        await Cidades.update({
            cid_nome, 
            cid_estado, 
            cid_pais, 
            cid_regiao,
            cid_continente
        }, {
            where: {
                id: cidade_id
            }
        });
        return res.status(200).send({
            status: 1,
            message: "Cidade atualizada com sucesso!!!"
        })
    },

    //deletar um registro
    async delete(req, res){
        const { cidade_id} = req.params
        const cidade = await Cidades.findByPk(cidade_id)
        if(!cidade){
            return res.status(400).json({error: "Cidade não encontrada!!!"})
        }else{
            console.log("Cidade encontrada!!!")
        }
        await Cidades.destroy({
            where:{
                id: cidade_id
            }
        })
    
    }

}

