const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');


module.exports = ({ config, basePath }) => {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: config.db.url
  });
  const firestore = admin.firestore();

  const db = {
    firestore,
    admin,
    models: {}
  };

  const models = path.join(basePath, './models');

  fs.readdirSync(models).forEach(file => {
    const modelRef = path.join(models, file);
    db.models[modelRef.name] = modelRef.model;
  });

  return db;
};

// EOF
