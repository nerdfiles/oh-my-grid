/**
 * @name response
 * @module infrastructure/support
 */
const { assoc } = require('ramda');

module.exports = ({ config }) => {
  const defaultResponse = (success = true) => {
    return {
      success,
      version: config.VERSION,
      date: new Date()
    };
  };

  const Success = (data) => {
    return assoc(
      'data',
      data,
      defaultResponse(true)
    );
  };

  const Fail = (data) => {
    return assoc(
      'error',
      data,
      defaultResponse(false)
    );
  };

  return {
    Success,
    Fail
  };
};

// EOF