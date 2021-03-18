/**
 * @module infrastructure/database/schema/user/index
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;


const User = new Schema({
  firstName: String
});

module.exports = (mongoose) => {
  const collectionNamespace = 'User';
  const model = mongoose.model(collectionNamespace, User);

  const userModel = {
    name: collectionNamespace,
    model: model
  };

  return userModel;

};

// EOF
