const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();

app.use(express.json())

const indexRoutes = require('./src/api/routes/indexRoutes.js')
const cidadesRoutes = require('./src/api/routes/cidadesRoutes.js')
const atracoesRoutes = require('./src/api/routes/atracoesRoutes.js')


app.use(indexRoutes)
app.use(cidadesRoutes)
app.use(atracoesRoutes)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3011);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;