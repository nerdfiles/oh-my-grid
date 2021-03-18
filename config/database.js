/**
 * @name database
 * @module config
 */
const path = require('path');
const dotEnvPath = path.resolve('.env');

require('dotenv').config({ path: dotEnvPath });

const serviceAccount = require("../keys/oh-my-grid-12067af1543f.json");

// @SEE https://firebase.google.com/docs/rules/rules-language
module.exports = {
  development: {
    'serviceAccount': serviceAccount,
    'url': process.env.DATABASE_URL,
    'rules_version': '2',
  },
  test: {
    'serviceAccount': serviceAccount,
    'url': process.env.DATABASE_URL_TEST,
    'rules_version': '2',
    logging: false
  },
  staging: {
    'serviceAccount': serviceAccount,
    'url': process.env.DATABASE_URL_STAGING,
    'rules_version': '2',
    'ssl': true
  },
  production: {
    'serviceAccount': serviceAccount,
    'url': process.env.DATABASE_URL_PRODUCTION,
    'rules_version': '2',
    'ssl': true
  }
};

// EOF
