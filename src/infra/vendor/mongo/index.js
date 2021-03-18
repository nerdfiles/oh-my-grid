/**
 * @module infrastructure/vendor/mongo/index
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const fs = require('fs');
const path = require('path');


module.exports = ({ config, basePath }) => {

  const serviceAccount = require("../../../../keys/mongo.json");
  mongoose.connect('mongodb://localhost:27017/' + serviceAccount.dbName, { useNewUrlParser: true })

  const database = {
    mongoose,
    models: {}
  };

  const modelsBasePath = path.join(basePath, './schema');

  fs.readdirSync(modelsBasePath).forEach(file => {
    const model = require(path.join(modelsBasePath, file));
    const modelRef = model(mongoose);
    database.models[modelRef.name] = modelRef.model;
  });

  return database;
};

// EOF
