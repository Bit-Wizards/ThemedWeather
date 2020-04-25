const mongoose = require('mongoose');

const StarwarsSchema = mongoose.Schema({

    _id : {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
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

});

module.exports = mongoose.model('Starwars', StarwarsSchema);