const mongoose = require('mongoose');
const { Schema } = mongoose;


const Place = Schema({
  name: String
});


module.exports = Place;
