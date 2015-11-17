var express = require('express');
// define our app as an instance of express
var app = express();
var mongoose = require('mongoose');
// define which port to listen on
var port = process.env.PORT || 9000;

var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/test');
var Dinosaur = require('./models/dinosaur');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Create a route!
app.get('/', function(req, res) {
  res.send({
    message: 'We made an API!'
  });
});

app.post('/dinosaurs', function(req, res) {
  var dino = new Dinosaur();
  dino.name = req.body.name;
  console.log(dino);
  dino.save(function(err) {
    if (err)
      res.send(err);

    res.json({
      message: 'Dino created!'
    });
  });
});

app.get('/dinosaurs', function(req, res) {
  Dinosaur.find(function(err, dinos) {
    if (err)
      res.send(err);

    res.json(dinos);
  });
});

// Start the server
app.listen(port);
console.log('We are on port ' + port + '. Check out localhost:9000!');