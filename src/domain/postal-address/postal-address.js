/**
 * @module domain/postal-address/postal-address
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper');


const PostalAddress = t.struct({
  id: t.maybe(t.String),
  streetAddress: t.String,
  addressLocality: t.String,
  addressRegion: t.String,
  postalCode: t.String
});


module.exports = compose(
  cleanData,
  PostalAddress
);

// EOF
