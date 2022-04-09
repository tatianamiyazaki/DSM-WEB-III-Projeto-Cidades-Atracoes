const express = require('express')
const router = express.Router();

const cidadesControllers = require('../controllers/cidadesControllers.js')

router.get('/cidades', cidadesControllers.indexAll)

router.post('/cidades', cidadesControllers.store)

router.get('/cidades/:cidade_id', cidadesControllers.index)

router.put('/cidades/:cidade_id', cidadesControllers.update)

router.delete('/cidades/:cidade_id', cidadesControllers.delete)


module.exports = router
