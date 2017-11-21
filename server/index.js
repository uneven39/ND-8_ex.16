const express 		= require('express');
const bodyParser 	= require('body-parser');

const routerREST	= require('./REST-api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.use('/rest', routerREST);

app.listen(2000);

module.exports = app;