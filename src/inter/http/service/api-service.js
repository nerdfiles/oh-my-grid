/**
 * @name api-service
 * @module interfaces/http/service
 */

module.exports = ({ config }) => {
  const API_KEY = config.API_KEY;
  return {
    API_KEY
  };
};

// EOF
