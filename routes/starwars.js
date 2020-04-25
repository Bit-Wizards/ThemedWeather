const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const weather = require('../services/openweather');

const starwars = require('../models/starwars');

router.get('/', (req, res) =>{
  starwars.find({}, (err, docs) => {
    res.send(docs);
  });
});

module.exports = router;

/*
router.get('/starwars', function(req, res, next) {

  if ((req.query.lat == undefined || req.query.lat == undefined) && req.query.city == undefined) {
    next({message: "No location chosen"});
    return;
  }

  let url = "https://api.openweathermap.org/data/2.5/weather?";
  if (req.query.city) {
    url += `q=${req.query.city}`;
  } else {
    url += `lat=${req.query.lat}&lon=${req.query.long}`;
  }
  url += `&appid=${apikey}`;


  request(url, {json: true}, (wErr, wRes, wBody) => {
    if(wBody.cod != 200) {
      next(wBody);
      return;
    }

    let p = getPlanet(wBody.main.temp, wBody.main.humidity);

    res.send(p);
  });
});

module.exports = router;

  function getPlanet (temp, humidity) {


    let currentPlanet;


    planets.forEach(planet => {
      // Temperature
      if (temp < planet.min_temp || temp > planet.max_temp) {
        return;
      }

      // Humidity
      if (planet.min_humidity && humidity < planet.min_humidity) {
        return;
      }

      currentPlanet = planet;
    });

    if (!currentPlanet) {
      planets.forEach(planet => {
        // Temperature
        if (temp < planet.min_temp || temp > planet.max_temp) {
          return;
        }

        currentPlanet = planet;
      });
    }

    return currentPlanet;
  }
*/