/**
 * @module infrastructure/vendor/bedquilt/index
 */
const fs = require('fs');
const path = require('path');
const bq = require('bedquilt');
const BC = bq.BedquiltClient;

module.exports = ({ config, basePath }) => {

  const database = {
    models: {}
  };

  BC.connect('localhost', (err, client) => {
    database.client = client;

    const modelsBasePath = path.join(basePath, './bedquilt');

    fs.readdirSync(modelsBasePath).forEach(file => {
      const model = require(path.join(modelsBasePath, file));
      const modelRef = model(client);
      database.models[modelRef.name] = modelRef.model;
    });
  });

  return database;
};

// EOF
