const express = require('express');
const router = express.Router();

const weather = require('../services/openweather');
const starwars = require('../models/starwars');

router.get('/', (req, res) =>{

  weather.getWeatherData({
    cityId: req.query.cityId,
    cityName: req.query.cityName,
    countryCode: req.query.countryCode,
    stateName: req.query.stateName,
    lat: req.query.lat,
    lon: req.query.lon
  }, (err, weatherRes) => {

    if (err) {
      res.send(err);
      return;
    }
    
    starwars.find({})
    .then((docs) => {
      res.send({weather: weatherRes, data: GetObjectWithTemp(docs, weatherRes)});
    })
    .catch((err) => {
      res.send({message: err});
    });
  
  });
});

function GetObjectWithTemp (objects, weatherData) {

  let temp = weatherData.main.temp;
  let humidity = weatherData.main.humidity;

  let object;
  objects.forEach((obj) => {
    if (temp < obj.min_temp || temp > obj.max_temp) {
      return;
    }

    object = obj;
  });

  return object
}

module.exports = router;