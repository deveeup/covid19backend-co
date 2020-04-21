const express = require('express');
const app = express();

const { config } = require('./config');
const covidApi = require('./routes');

app.use(express.json());

covidApi(app);

app.listen(config.port, function () {
  console.log(`Running covid19colombia, listen in port: ${config.port}`);
});
