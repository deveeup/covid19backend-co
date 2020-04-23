const express = require('express');
const axios = require('axios');
const moment = require('moment');
const momentTz = require('moment-timezone');
const { config } = require('../config');
const DepartamentsService = require('../services/departaments');
const ColombiaService = require('../services/colombia');

function covidApi(app) {
  moment.locale('es');
  momentTz().tz("America/Bogota").format();
  const router = express.Router();
  app.use('/api', router);
  const departamentService = new DepartamentsService();
  const colombiaService = new ColombiaService();
  router.get('/setData', async function (req, res) {
    const today = moment(new Date());
    const todayFormat = moment(today).format('DD/MM/YYYY');
    const hourFormat = moment(today).format("hh:mm a");
    axios.get(config.urlApi)
      .then(async function (response) {
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
        try {
          const insertDepartaments = await departamentService.createDepartament({
            date: todayFormat,
            hour: hourFormat,
            data: departaments
          });
          const insertGlobalData = await colombiaService.createData({
            date: todayFormat,
            hour: hourFormat,
            data: colombia
          });
          res.send({
            insertGlobalData,
            insertDepartaments,
            message: "successful..."
          });
        } catch (err) {
          console.log(err)
          res.send({
            error: true,
            message: 'Ha ocurrido un error'
          });
        }
      })
      .catch(function (error) {
        console.log(error)
        res.send({
          error: true,
          message: 'Ha ocurrido un error'
        });
      });
  });
  router.get('/departaments/:date', async function (req, res) {
    const { date } = req.params;
    try {
      const departaments = await departamentService.getDepartaments({ date });
      res.send({
        status: 'ok',
        departaments
      });
    } catch (err) {
      res.send({
        status: "error",
        error: err.message,
      })
    }
  });
  router.get('/colombia/:date', async function (req, res) {
    const { date } = req.params;
    try {
      const data = await colombiaService.getData({ date });
      res.send({
        status: 'ok',
        data
      });
    } catch (err) {
      res.send({
        status: 'error',
        error: err.message,
      })
    }
  });
};

module.exports = covidApi;
