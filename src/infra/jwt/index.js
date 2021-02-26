/**
 * @module infrastructure/jwt
 * @description
 * Signing, etc.
 */
const jwt = require('jsonwebtoken');
const {
  compose,
  trim,
  replace,
  partialRight
} = require('ramda');


module.exports = ({ config }) => ({
  /**
   * @function signin
   * @inner
   * @param {Object} options
   */
  signin: (options) => (payload) => {
    const opt = Object.assign({}, options, { expiresIn: '1h' });
    return jwt.sign(payload, config.AUTH_SECRET, opt);
  },
  /**
   * @function verify
   * @inner
   * @param {Object} options
   */
  verify: (options) => (token) => {
    const opt = Object.assign({}, options);
    return jwt.verify(token, config.AUTH_SECRET, opt);
  },
  /**
   * @function decode
   * @inner
   * @param {Object} options
   */
  decode: (options) => (token) => {
    const opt = Object.assign({}, options);
    const decodeToken = compose(
      partialRight(jwt.decode, [opt]),
      trim,
      replace(/JWT|jwt/g, '')
    );

    return decodeToken(token);
  }
});

// EOF

