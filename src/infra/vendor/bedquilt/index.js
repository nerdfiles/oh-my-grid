/**
 * @module infrastructure/vendor/bedquilt/index
 */
const fs = require('fs');
const path = require('path');


module.exports = ({ config, basePath }) => {
  const database = {
    models: {}
  };

  const modelsBasePath = path.join(basePath, './models');

  fs.readdirSync(modelsBasePath).forEach(file => {
    const modelPath = require(path.join(modelsBasePath, file));
    const collectionNamespace = file;
    database.models[collectionNamespace] = collectionNamespace;
  });

  return database;
};

// EOF
