const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const cidades = require('../api/models/cidadesModels.js')
const atracoes = require('../api/models/atracoesModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

cidades.init(conexao)
atracoes.init(conexao)

cidades.associate(conexao.models)
atracoes.associate(conexao.models)

module.exports = conexao;

