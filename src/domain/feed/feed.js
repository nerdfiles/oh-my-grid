/**
 * @module domain/feed/feed
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const Feed = t.struct({
  id: t.maybe(t.String),
  latitude: t.Number,
  longitude: t.Number
});


module.exports = compose(cleanData, Feed);

// EOF
