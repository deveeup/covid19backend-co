const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URL_API = process.env.URL_API;

app.get('/', function (req, res) {
  axios.get(URL_API)
    .then(function (response) {
      const data = response.data.data;
      let colombia = {
        long: 0,
        name: "Colombia",
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0
      };
      let bogota = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let cali = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let medellin = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let cartagena = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let barranquilla = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let santaMarta = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let pereira = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let neiva = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let cucuta = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let villavicencio = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let palmira = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let armenia = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let dosQuebradas = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let valledupar = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let bello = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let ibague = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let laDorada = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let envigado = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let chia = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let soacha = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      let others = {
        count: 0,
        lat: 0,
        long: 0,
        name: '',
        sexM: 0,
        sexF: 0,
        recovered: 0,
        inHouse: 0,
        inHospital: 0,
        dead: 0,
      };
      data.map(item => {
        colombia.count++;
        if (item[14] === 'M') colombia.sexM++; else colombia.sexF++;
        if (item[12] === 'Recuperado') colombia.recovered++; else if (item[12] === 'Casa') colombia.inHouse++; else if (item[12] === 'Fallecido') colombia.dead++; else colombia.inHospital++;

        if (item[10] === 'Bogota') {
          bogota.count++;
          if (item[14] === 'M') bogota.sexM++; else bogota.sexF++;
          if (item[12] === 'Recuperado') bogota.recovered++; else if (item[12] === 'Casa') bogota.inHouse++; else if (item[12] === 'Fallecido') bogota.dead++; else bogota.inHospital++;
        }
        else if (item[10] === 'Cali') {
          cali.count++;
          if (item[14] === 'M') cali.sexM++; else cali.sexF++;
          if (item[12] === 'Recuperado') cali.recovered++; else if (item[12] === 'Casa') cali.inHouse++; else if (item[12] === 'Fallecido') cali.dead++; else cali.inHospital++;
        }
        else if (item[10] === 'Medellin') {
          medellin.count++;
          if (item[14] === 'M') medellin.sexM++; else medellin.sexF++;
          if (item[12] === 'Recuperado') medellin.recovered++; else if (item[12] === 'Casa') medellin.inHouse++; else if (item[12] === 'Fallecido') medellin.dead++; else medellin.inHospital++;
        }
        else if (item[10] === 'Cartagena') {
          cartagena.count++;
          if (item[14] === 'M') cartagena.sexM++; else cartagena.sexF++;
          if (item[12] === 'Recuperado') cartagena.recovered++; else if (item[12] === 'Casa') cartagena.inHouse++; else if (item[12] === 'Fallecido') cartagena.dead++; else cartagena.inHospital++;
        }
        else if (item[10] === 'Barranquilla') {
          barranquilla.count++;
          if (item[14] === 'M') barranquilla.sexM++; else barranquilla.sexF++;
          if (item[12] === 'Recuperado') barranquilla.recovered++; else if (item[12] === 'Casa') barranquilla.inHouse++; else if (item[12] === 'Fallecido') barranquilla.dead++; else barranquilla.inHospital++;
        }
        else if (item[10] === 'Santa Marta') {
          santaMarta.count++;
          if (item[14] === 'M') santaMarta.sexM++; else santaMarta.sexF++;
          if (item[12] === 'Recuperado') santaMarta.recovered++; else if (item[12] === 'Casa') santaMarta.inHouse++; else if (item[12] === 'Fallecido') santaMarta.dead++; else santaMarta.inHospital++;
        }
        else if (item[10] === 'Pereira') {
          pereira.count++;
          if (item[14] === 'M') pereira.sexM++; else pereira.sexF++;
          if (item[12] === 'Recuperado') pereira.recovered++; else if (item[12] === 'Casa') pereira.inHouse++; else if (item[12] === 'Fallecido') pereira.dead++; else pereira.inHospital++;
        }
        else if (item[10] === 'Neiva') {
          neiva.count++;
          if (item[14] === 'M') neiva.sexM++; else neiva.sexF++;
          if (item[12] === 'Recuperado') neiva.recovered++; else if (item[12] === 'Casa') neiva.inHouse++; else if (item[12] === 'Fallecido') neiva.dead++; else neiva.inHospital++;
        }
        else if (item[10] === 'Cucuta') {
          cucuta.count++;
          if (item[14] === 'M') cucuta.sexM++; else cucuta.sexF++;
          if (item[12] === 'Recuperado') cucuta.recovered++; else if (item[12] === 'Casa') cucuta.inHouse++; else if (item[12] === 'Fallecido') cucuta.dead++; else cucuta.inHospital++;
        }
        else if (item[10] === 'Villavicencio') {
          villavicencio.count++;
          if (item[14] === 'M') villavicencio.sexM++; else villavicencio.sexF++;
          if (item[12] === 'Recuperado') villavicencio.recovered++; else if (item[12] === 'Casa') villavicencio.inHouse++; else if (item[12] === 'Fallecido') villavicencio.dead++; else villavicencio.inHospital++;
        }
        else if (item[10] === 'Palmira') {
          palmira.count++;
          if (item[14] === 'M') palmira.sexM++; else palmira.sexF++;
          if (item[12] === 'Recuperado') palmira.recovered++; else if (item[12] === 'Casa') palmira.inHouse++; else if (item[12] === 'Fallecido') palmira.dead++; else palmira.inHospital++;
        }
        else if (item[10] === 'Armenia') {
          armenia.count++;
          if (item[14] === 'M') armenia.sexM++; else armenia.sexF++;
          if (item[12] === 'Recuperado') armenia.recovered++; else if (item[12] === 'Casa') armenia.inHouse++; else if (item[12] === 'Fallecido') armenia.dead++; else armenia.inHospital++;
        }
        else if (item[10] === 'Dosquebradas') {
          dosQuebradas.count++;
          if (item[14] === 'M') dosQuebradas.sexM++; else dosQuebradas.sexF++;
          if (item[12] === 'Recuperado') dosQuebradas.recovered++; else if (item[12] === 'Casa') dosQuebradas.inHouse++; else if (item[12] === 'Fallecido') dosQuebradas.dead++; else dosQuebradas.inHospital++;
        }
        else if (item[10] === 'Valledupar') {
          valledupar.count++;
          if (item[14] === 'M') valledupar.sexM++; else valledupar.sexF++;
          if (item[12] === 'Recuperado') valledupar.recovered++; else if (item[12] === 'Casa') valledupar.inHouse++; else if (item[12] === 'Fallecido') valledupar.dead++; else valledupar.inHospital++;
        }
        else if (item[10] === 'Bello') {
          bello.count++;
          if (item[14] === 'M') bello.sexM++; else bello.sexF++;
          if (item[12] === 'Recuperado') bello.recovered++; else if (item[12] === 'Casa') bello.inHouse++; else if (item[12] === 'Fallecido') bello.dead++; else bello.inHospital++;
        }
        else if (item[10] === 'Ibague') {
          ibague.count++;
          if (item[14] === 'M') ibague.sexM++; else ibague.sexF++;
          if (item[12] === 'Recuperado') ibague.recovered++; else if (item[12] === 'Casa') ibague.inHouse++; else if (item[12] === 'Fallecido') ibague.dead++; else ibague.inHospital++;
        }
        else if (item[10] === 'La Dorada') {
          laDorada.count++;
          if (item[14] === 'M') laDorada.sexM++; else laDorada.sexF++;
          if (item[12] === 'Recuperado') laDorada.recovered++; else if (item[12] === 'Casa') laDorada.inHouse++; else if (item[12] === 'Fallecido') laDorada.dead++; else laDorada.inHospital++;
        }
        else if (item[10] === 'Envigado') {
          envigado.count++;
          if (item[14] === 'M') envigado.sexM++; else envigado.sexF++;
          if (item[12] === 'Recuperado') envigado.recovered++; else if (item[12] === 'Casa') envigado.inHouse++; else if (item[12] === 'Fallecido') envigado.dead++; else envigado.inHospital++;
        }
        else if (item[10] === 'Chia') {
          chia.count++;
          if (item[14] === 'M') chia.sexM++; else chia.sexF++;
          if (item[12] === 'Recuperado') chia.recovered++; else if (item[12] === 'Casa') chia.inHouse++; else if (item[12] === 'Fallecido') chia.dead++; else chia.inHospital++;
        }
        else if (item[10] === 'Soacha') {
          soacha.count++;
          if (item[14] === 'M') soacha.sexM++; else soacha.sexF++;
          if (item[12] === 'Recuperado') soacha.recovered++; else if (item[12] === 'Casa') soacha.inHouse++; else if (item[12] === 'Fallecido') soacha.dead++; else soacha.inHospital++;
        }
        else others.count++;
      });


      const departaments = [
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
      ];
      res.send({
        cases: {
          colombia,
          departaments: departaments
        }
      });
    })
    .catch(function (error) {
    });
});

app.listen(PORT, function () {
  console.log('run backend...');
});