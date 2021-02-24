const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const firebase = require('firebase');


module.exports = ({ config, basePath }) => {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: config.database.url,
    ...config
  });
  const firestore = admin.firestore();

  const database = {
    firestore,
    admin,
    models: {}
  };

  const models = path.join(basePath, './models');

  fs.readdirSync(models).forEach(file => {
    const modelRef = require(path.join(models, file));
    database.models[modelRef.name] = modelRef.model;
  });

  return database;
};

// EOF
