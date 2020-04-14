const request = require('supertest');
const express = require('express');
const Mocha = require('mocha');
var assert = require('chai').assert;
const mocha = new Mocha({ ui: 'bdd' });
const app = express();
const openApiWeather = require('../services/weather');


describe('Endpoints v1', function() {
  
  console.log(process.env);
  let validCity = 'Amsterdam';
  let citiIp = 'Buenos Aires';
  let ip = '181.167.180.100';

  describe('GET /location', function() {

    it('Check Services IP', async function() {
        const location = await openApiWeather.getDataLocationByIp(ip);
        assert.match(location.city, /Buenos Aires/, 'Coincidencia');
    });

    it('Get Location IP ', function() {
      request(app)
        .get('/location')
        .expect(200);
    });

  }); 


  describe('GET /current', function() {
    
    it('Valid city ', function() {
      request(app)
        .get('/v1/current/' + validCity)
        .expect(200);
    });
    it('InValid city', function() {
      request(app)
        .get('/v1/current/no_exist' )
        .expect(404)
    });
  });

  describe('GET /forecast', function() {
      
    it('Valid city ', function() {
      request(app)
        .get('/v1/forecast/' + validCity)
        .expect(200)
    });

    it('InValid city', function() {
      request(app)
        .get('/v1/current/no_exist' )
        .expect(404)
    });


  });  

});

mocha.run()

