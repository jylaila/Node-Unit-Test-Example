//importando os módulos do framework
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');

//importando o módulo de rotas que criamos 
const loginRoute = require('./routes/LoginRoute')

//usado para adicionar o Router ao caminho de gerenciamento de middleware
app.use(loginRoute)

/* Middlewares */
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//vamos adicionar o template ejs e o endereçamento das views
app.set('view engine', 'ejs');
app.set('views', './views/login');

app.listen(3000, function(){
    console.log('APP rodando na porta 3000');
  });