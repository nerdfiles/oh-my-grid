const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const firebase = require('firebase');


module.exports = ({ config, basePath }) => {
  var serviceAccount = require("../../../../keys/oh-my-grid-12067af1543f.json");

  admin.initializeApp({
    //credential: admin.credential.applicationDefault(),
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.database.url,
    //...config
  });
  const firestore = admin.firestore();

  const database = {
    firestore,
    admin,
    models: {}
  };

  const modelsBasePath = path.join(basePath, './models');

  fs.readdirSync(modelsBasePath).forEach(file => {
    const modelPath = require(path.join(modelsBasePath, file));
    const modelRef = modelPath(firestore);
    database.models[modelRef.name] = modelRef.model;
  });

  return database;
};

// EOF
