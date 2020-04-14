const axios = require('axios');

const getDataLocationByIp = async (ip) => {

	let req = await axios.get(`http://api.ipapi.com/${ ip }?access_key=${ process.env.API_KEY_IPAPI }`);
	return req.data;
}

const getCityWeather = async (city) => {
	
	let req = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&appid=${ process.env.API_KEY_OPENW }&&lang=es`)
	.catch(err => { return false; });
	return req.data;
}

const getCityForecast = async (city) => {
	
	let req = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ city }&cnt=5&units=metric&appid=${ process.env.API_KEY_OPENW }&&lang=es`)
	.catch(err => { return false; });
	return req.data;
}

module.exports = {
	getDataLocationByIp	, getCityWeather, getCityForecast
}