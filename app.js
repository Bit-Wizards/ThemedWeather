const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


//Routes
app.get('/', (req, res) => {

  res.json({"Message" : "Welcome to the Weather Themed API"});

});

require('./app/routes/starwars.routes.js')(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});