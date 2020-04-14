
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiVersion = require('./routes/v1');

app.use(bodyParser.json());

app.use(express.static( __dirname + '/views' ) );
app.use('/v1', apiVersion);
app.listen(process.env.PORT || 8080);