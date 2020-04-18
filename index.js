const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

let bogota = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let cali = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let medellin = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let cartagena = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let barranquilla = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let santaMarta = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let pereira = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let neiva = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let cucuta = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let villavicencio = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let palmira = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let armenia = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let dosQuebradas = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let valledupar = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let bello = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let ibague = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let laDorada = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let envigado = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let chia = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let soacha = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};
let others = {
  count: 0,
  lat: 0,
  long: 0,
  name: ''
};

app.get('/', function (req, res) {
  axios.get(process.env.URL_API)
    .then(function (response) {
      const data = response.data.data;
      data.map(item => {
        if (item[10] === 'Bogota') bogota.count++
        else if (item[10] === 'Cali') cali.count++
        else if (item[10] === 'Medellin') medellin.count++
        else if (item[10] === 'Cartagena') cartagena.count++
        else if (item[10] === 'Barranquilla') barranquilla.count++
        else if (item[10] === 'Santa Marta') santaMarta.count++
        else if (item[10] === 'Pereira') pereira.count++
        else if (item[10] === 'Neiva') neiva.count++
        else if (item[10] === 'Cucuta') cucuta.count++
        else if (item[10] === 'Villavicencio') villavicencio.count++
        else if (item[10] === 'Palmira') palmira.count++
        else if (item[10] === 'Armenia') armenia.count++
        else if (item[10] === 'Dosquebradas') dosQuebradas.count++
        else if (item[10] === 'Valledupar') valledupar.count++
        else if (item[10] === 'Bello') bello.count++
        else if (item[10] === 'Ibague') ibague.count++
        else if (item[10] === 'La Dorada') laDorada.count++
        else if (item[10] === 'Envigado') envigado.count++
        else if (item[10] === 'Chia') chia.count++
        else if (item[10] === 'Soacha') soacha.count++
        else others.count++;
      })
      res.send([
        bogota,
        cali,
        medellin,
        cartagena,
        barranquilla,
        santaMarta,
        pereira,
        neiva,
        cucuta,
        villavicencio,
        palmira,
        armenia,
        dosQuebradas,
        valledupar,
        bello,
        ibague,
        laDorada,
        envigado,
        chia,
        soacha,
        others
      ]);
    })
    .catch(function (error) {
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});