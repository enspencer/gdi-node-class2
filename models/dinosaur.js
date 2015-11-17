var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DinosaurSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);