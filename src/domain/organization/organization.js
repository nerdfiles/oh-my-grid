/**
 * @module domain/organization/organization
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const Organization = t.struct({
  id: t.maybe(t.String),
  email: t.String,
  password: t.maybe(t.String),
  verificationCode: t.maybe(t.String),
  isVerified: t.maybe(t.Number),
  isDeleted: t.Number,
  createdBy: t.maybe(t.String),
  updatedBy: t.maybe(t.String),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date),
  hep: t.maybe(t.Number)
});


module.exports = compose(
  cleanData,
  Organization
);

// EOF
