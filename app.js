const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Setup Environment
require('dotenv').config();

// Import Routes
const starwarsRoute = require('./routes/starwars')

app.use('/starwars', starwarsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
  if (err) {
    process.exit();
  }
});

// Listening
app.listen(3000);