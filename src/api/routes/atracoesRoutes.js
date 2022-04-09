const express = require('express')
const router = express.Router();

const atracoesControllers = require('../controllers/atracoesControllers.js')

router.get('/atracoes', atracoesControllers.indexAll);

router.post('/atracoes/:cidade_id/atracoes', atracoesControllers.store)

router.get('/atracoes/:cidade_id/atracoes', atracoesControllers.index)

router.put('/atracoes/:atracoes_id', atracoesControllers.update)

router.delete('/atracoes/:atracoes_id', atracoesControllers.delete)

module.exports = router