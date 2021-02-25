/**
 * @name token
 * @module domain/token
 */

const t = require('tcomb');


const Token = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String
});


module.exports = Token;

// EOF
