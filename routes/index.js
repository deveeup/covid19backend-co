const express = require('express');
const axios = require('axios');
const { config } = require('../config');

function covidApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.get('/', function (req, res) {
    axios.get(config.urlApi)
      .then(function (response) {
        const purifyDepartaments = [];
        const departaments = [];
        const colombia = {
          sexF: 0,
          sexM: 0,
          recovered: 0,
          inHouse: 0,
          inHospital: 0,
          dead: 0,
          ageRange: {
            smallerThan20: 0,
            between20And40: 0,
            between40And60: 0,
            greaterThan60: 0
          },
          total: 0
        };

        const data = response.data.data;
        data.map(item => {
          if (purifyDepartaments.indexOf(item[11]) === -1) {
            purifyDepartaments.push(item[11]);
          }
        });
        purifyDepartaments.map(dep => {
          departaments.push({
            name: dep,
            sexM: 0,
            sexF: 0,
            recovered: 0,
            inHouse: 0,
            inHospital: 0,
            dead: 0,
            ageRange: {
              smallerThan20: 0,
              between20And40: 0,
              between40And60: 0,
              greaterThan60: 0
            },
            total: 0,
          })
        });
        data.map(item => {
          colombia.total++;
          if (item[15] === 'F') {
            colombia.sexF++
          } else {
            colombia.sexM++
          }
          if (item[13] === 'Recuperado') {
            colombia.recovered++;
          } else if (item[13] === 'Hospital') {
            colombia.inHospital++;
          } else if (item[13] === 'Casa') {
            colombia.inHouse++;
          } else if (item[13] === 'Fallecido') {
            colombia.dead++;
          }
          if (Number(item[14]) <= 20) {
            colombia.ageRange.smallerThan20++;
          } else if (Number(item[14]) > 20 && Number(item[14]) <= 40) {
            colombia.ageRange.between20And40++;
          } else if (Number(item[14]) > 40 && Number(item[14]) <= 60) {
            colombia.ageRange.between40And60++;
          } else if (Number(item[14]) > 60) {
            colombia.ageRange.greaterThan60++;
          }
          departaments.map(dep => {
            if (item[11] === dep.name) {
              dep.total++;
              if (item[15] === 'F') {
                dep.sexF++
              } else {
                dep.sexM++
              }
              if (item[13] === 'Recuperado') {
                dep.recovered++;
              } else if (item[13] === 'Hospital') {
                dep.inHospital++;
              } else if (item[13] === 'Casa') {
                dep.inHouse++;
              } else if (item[13] === 'Fallecido') {
                dep.dead++;
              }
              if (Number(item[14]) <= 20) {
                dep.ageRange.smallerThan20++;
              } else if (Number(item[14]) > 20 && Number(item[14]) <= 40) {
                dep.ageRange.between20And40++;
              } else if (Number(item[14]) > 40 && Number(item[14]) <= 60) {
                dep.ageRange.between40And60++;
              } else if (Number(item[14]) > 60) {
                dep.ageRange.greaterThan60++;
              }
            }
          });
        });
        res.send({ colombia, departaments });
      })
      .catch(function (error) {
        console.log(error)
        res.send({
          error: true,
          message: 'Ha ocurrido un error'
        });
      });
  });
};

module.exports = covidApi;





