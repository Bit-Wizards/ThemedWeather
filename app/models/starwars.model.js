const mongoose = require('mongoose');
const collection_name = "starwars"; 
const StarwarsSchema = mongoose.Schema({

    name : {
        type: String,
        require: true
    },
    min_temp : {
        type: mongoose.Schema.Types.Number,
        require: true
    },
    max_temp : {
        type: mongoose.Schema.Types.Number,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    }

}, { collection: collection_name });


module.exports = mongoose.model('themed_weather', StarwarsSchema, collection_name);
