const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlanetSchema = new Schema({
	_id: ObjectId,
	name: String,
	min_temp: Number,
	max_temp: Number,
	img: String,
	color: String
}, {
	collection: 'starwars'
});

const PlanetModel = mongoose.model('Planet', PlanetSchema, 'starwars');

module.exports = PlanetModel;