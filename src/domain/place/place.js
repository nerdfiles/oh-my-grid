/**
 * @name place
 * @module domain/place
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const Place = t.struct({
  id: t.maybe(t.String),
  latitude: t.Number,
  longitude: t.Number
});


module.exports = compose(cleanData, Place);

// EOF
