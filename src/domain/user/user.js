/**
 * @module domain/user/user
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const User = t.struct({
  id: t.maybe(t.String),
  firstName: t.String,
  lastName: t.String,
  middleName: t.String,
  email: t.String,
  password: t.maybe(t.String),
  role: t.String,
  verificationCode: t.maybe(t.String),
  isVerified: t.maybe(t.Number),
  isDeleted: t.Number,
  createdBy: t.maybe(t.String),
  updatedBy: t.maybe(t.String),
  createdAt: t.maybe(t.String),
  updatedAt: t.maybe(t.String)
});


module.exports = compose(
  cleanData,
  User
);

// EOF
