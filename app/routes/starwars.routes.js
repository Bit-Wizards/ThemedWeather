const express = require('express');
const router = express.Router();


module.exports = (app) => {
    const starwars = require('../controllers/starwars.controller.js');

    // Retrieve all Notes
    app.get('/starwars', starwars.findAll);
}