/**
 * @name environemtns
 * @module config
 */
require('dotenv').load()

const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

function loadDbConfig () {
  if (fs.existsSync(path.join(__dirname, 'database.js'))) {
    return require('./database')[ENV];
  }

  throw new Error('Database is configuration is required');
}

const envConfig = require(path.join(__dirname, 'environments', ENV));
const databaseConfig = loadDbConfig();
const config = Object.assign({
  env: ENV,
  database: databaseConfig
}, envConfig);

module.exports = config;

// EOF
