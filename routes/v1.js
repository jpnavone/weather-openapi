const router = require('express').Router();
const weatherController = require('../api/v1/controllers/weather');

router.get('/location',  (req, res) => {
	return weatherController.getLocation(req, res);	  
});

router.get('/current/:city?', (req, res) => {
	return weatherController.getWeatherCurrent(req, res);
});

router.get('/forecast/:city?', (req, res) => {
	return weatherController.getWeatherForecast(req, res);
});

module.exports = router ;