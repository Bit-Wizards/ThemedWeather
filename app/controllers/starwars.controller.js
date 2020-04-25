const Starwars = require('../models/starwars.model.js');


exports.findAll = async (req, res) => {
    try{
        const data = await Starwars.find({});
        res.send(data);
    } catch (err) {
        res.json({ message: err})
    }
    
};

