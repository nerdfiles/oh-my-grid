/**
 * @name api-service
 * @module interfaces/http/service
 */
const got = require('got');
const cache = {};

module.exports = ({ config }) => {
  const API_KEY = config.API_KEY;
  const url = 'http://api.eia.gov/series/?series_id=sssssss&api_key=' + API_KEY + '[&num=10][&out=json]';

  const reply = () => {
    return new Promise(async (resolve, reject) => {
      if (cache.hasOwnProperty(url)) {
        return resolve(cache[url]);
      }
      cache[url] = await got(url);
      resolve(cache[url].body);
    });
  };
  return {
    API_KEY,
    reply: reply
  };
};

// EOF
