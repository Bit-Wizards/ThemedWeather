const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const Starwars = require('./models/Starwars')


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

mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var S = mongoose.model("themed_weather",Starwars.schema,"starwars").find({});

//Listening
app.listen(3000);
