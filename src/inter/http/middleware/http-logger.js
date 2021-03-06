/**
 * @module interfaces/http/middleware/http-logger
 */
const morgan = require('morgan');


module.exports = (logger) => {
  return morgan('common', {
    stream: {
      write: (message) => {
        logger.info(message.slice(0, -1));
      }
    }
  });
};

// EOF
