var http = require('http');

/**
 * @callback callback
 * @param {string} error
 * @param {string} response
 */

/**
 * @param {Object} data This is the data to be sent to the weather API
 * @param {string} data.cityId City ID of location to get weather
 * @param {string} data.cityName City name to look for
 * @param {string} data.stateName If city specified you can also add the State / Province
 * @param {string} data.countryCode If city name and state specified country code can also be specified
 * @param {number} data.lat If none of the above provided a lat and long can be specified
 * @param {number} data.lon If none of the above provided a lat and long can be specified
 * @param {callback} callback
 */
function getWeatherData(data, callback) {
	let url = 'http://api.openweathermap.org/data/2.5/weather?';
	
	if(data.cityId) {
		url += "id=" + data.cityId;
	} else if (data.cityName) {
		url += "q=" + data.cityName;
		if (data.stateName) {
			url += "," + data.stateName;
		}
		if (data.countryCode) {
			url += "," + data.countryCode;
		}
	} else if(data.lat && data.lon) {
		url += "lat=" + data.lat + "&lon=" + data.lon
	}

	url += "&apiKey=" + '9613fbb4262982d7f9255eeed1037cd1';

	request(url, (err, res) => {
		if (res.cod != 200) {
			callback(res, null);
			return;
		} 

		callback(err, res);
	});
}

function request (url, callback) {

	http.get(url, (res) => {
		let data = "";

		res.on('data', (chunk) => {
			data += chunk;
		});

		res.on('end', () => {
			callback(null, JSON.parse(data));
		});
	}).on('error', (err) => {
		callback(err, null);
	});
}

module.exports.getWeatherData = getWeatherData;