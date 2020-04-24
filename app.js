const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient;

require('dotenv/config');

//Middlewares


//Import Routes
const starwarsRoute = require('./routes/starwars')

app.use('/starwars', starwarsRoute);

//Routes
app.get('/', (req, res) => {

  res.send("We are on home");

});

//Connect To DB
// useUnifiedTopology: true creates a timout, removed for now until I find a fix
const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, {useNewUrlParser: true });
client.connect(err => {
  console.log('Connected to DB!');
  // perform actions on the collection object
  client.close();
});
//Listening
app.listen(3000);
