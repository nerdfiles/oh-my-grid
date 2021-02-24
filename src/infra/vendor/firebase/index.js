const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const firebase = require('firebase');


module.exports = ({ config, basePath }) => {

	var firebaseConfig = {
		apiKey: "AIzaSyCzZn8wyisWbt_FSSLkgmmoXP9sLtwmZ0g",
		authDomain: "oh-my-grid.firebaseapp.com",
		projectId: "oh-my-grid",
		storageBucket: "oh-my-grid.appspot.com",
		messagingSenderId: "285931600205",
		appId: "1:285931600205:web:d339c642f943adfc6ddf04",
		measurementId: "G-4ZB89DKKHS"
	};

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: config.database.url
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
