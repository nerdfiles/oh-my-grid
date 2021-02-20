/**
 * @name post
 * @module app/token
 */
const token = require('src/domain/token');
module.exports = function ({ token }) {
  var el = t.struct({
    id: t.maybe(t.String)
  });

  const tokenDomain = {
    ...el
  };
  return {
    el
  };
};

// EOF
