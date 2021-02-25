/**
 * @name index
 * @module app/user
 * @description
 *
 * Think of these as components which adapt custom names within the context of 
 * HTTP verbs, or extensions of the verb (where Amundsen uses switch statements).
 */
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

module.exports = {
  get,
  post,
  put,
  remove
};

// EOF
