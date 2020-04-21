const express = require('express');
const app = express();

const { config } = require('./config');
const covidApi = require('./routes');

app.use(express.json());

covidApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port} || ${config.urlApi}`);
});