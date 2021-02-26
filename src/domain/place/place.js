/**
 * @module domain/place/place
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const Place = t.struct({
  id: t.maybe(t.String),
  latitude: t.Number,
  longitude: t.Number,
  ownerId: t.maybe(t.String),
  addressId: t.maybe(t.String),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date)
});


module.exports = compose(cleanData, Place);

// EOF
