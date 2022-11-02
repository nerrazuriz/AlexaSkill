var express = require('express');
var router = express.Router();
const findNearestLocation = require('../functions/findNearestLocation');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Alexa Skill' });
});

//post endpoint that calculates the distance between two locations
router.post('/distance', function (req, res, next) {
  var userAdress = req.body.userAdress;
  // Convert address to coordinates
  var userCoordinates = geocoder.geocode(userAdress); // usar google geocoordinate en su defecto

  var nearestLocation = findNearestLocation(userCoordinates.lat, userCoordinates.lng);
  res.send(nearestLocation);
});


module.exports = router;
