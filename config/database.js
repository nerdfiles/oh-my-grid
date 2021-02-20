/**
 * @name database
 * @module config
 */
const path = require('path');
const dotEnvPath = path.resolve('.env');

require('dotenv').config({ path: dotEnvPath });

// @SEE https://firebase.google.com/docs/rules/rules-language
module.exports = {
  development: {
    'url': process.env.DATABASE_URL,
    'rules_version': '2',
  },
  test: {
    'url': process.env.DATABASE_URL_TEST,
    'rules_version': '2',
    logging: false
  },
  staging: {
    'url': process.env.DATABASE_URL_STAGING,
    'rules_version': '2',
    'ssl': true
  },
  production: {
    'url': process.env.DATABASE_URL_PRODUCTION,
    'rules_version': '2',
    'ssl': true
  }
};

// EOF
