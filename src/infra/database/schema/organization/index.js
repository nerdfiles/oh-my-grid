const mongoose = require('mongoose');
const { Schema } = mongoose;


const Organization = new Schema({
  name: String
});


module.exports = Organization;
