/**
 * @module domain/token/token
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const Token = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String
});


module.exports = compose(
  cleanData,
  Token
);

// EOF
