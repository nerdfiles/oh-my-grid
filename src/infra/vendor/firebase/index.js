/**
 * @module infrastructure/vendor/firebase/index
 */
const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const firebase = require('firebase');


module.exports = ({ config, basePath }) => {

  admin.initializeApp({
    credential: admin.credential.cert(config.database.serviceAccount)
  });
  const firestore = admin.firestore();
  firestore.settings({
    ignoreUndefinedProperties: true
  });

  const database = {
    firestore,
    admin,
    models: {}
  };

  const modelsBasePath = path.join(basePath, './models');

  fs.readdirSync(modelsBasePath).forEach(file => {
    const model = require(path.join(modelsBasePath, file));
    const modelRef = model(firestore);
    database.models[modelRef.name] = modelRef.model;
  });

  return database;
};

// EOF
