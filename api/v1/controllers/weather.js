const openApiWeather = require('../services/weather');
const os = require( 'os' );

const getCity = async (req) => {

	var  city = req.params.city;
	if (typeof (city)  == 'undefined'){
		let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		console.log(' IP ', ip, req.headers['x-forwarded-for'])
		console.log('remote IP', req.connection.remoteAddress)
		const location = await openApiWeather.getDataLocationByIp(ip);
		return `${location.city},${location.region_name}`;
	}	
	else{
		return city;
	}
}

const getFormatWeather =  (weather) => {

	let date = new Date(weather.dt * 1000);
	let dataWeather = { 
		img: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
		description: weather.weather[0].description,
		temp: weather.main.temp,
		date: date.toLocaleDateString('es-AR')+ ' ' + date.toLocaleTimeString('es-AR')
	}

	return dataWeather;
}

const getLocation = async (req, res) => {
	
	let city = await getCity(req);
	return res.send(city);
}

const getWeatherCurrent = async (req, res) => {

	let city = await getCity(req);
	let infoWeather = openApiWeather.getCityWeather(city)
		.then(response => {
			let resWeather= [getFormatWeather(response)];
			res.send(resWeather);
		})
		.catch(err => {
			res.status(404).send('No se encontró la ciudad')});
}

const getWeatherForecast = async (req, res) => {

	const city = await getCity(req);
	
	let infoWeather = openApiWeather.getCityForecast(city)
		.then(response => {
			let forecastList = [];
			response.list.forEach(( elem , index ) => {
				forecastList.push(getFormatWeather(elem));
			});
			res.send(forecastList);
		})
		.catch(err => {
			console.log(err)
			res.status(404).send('No se encontró la ciudad')});
}

module.exports = { getLocation , getWeatherCurrent , getWeatherForecast}
