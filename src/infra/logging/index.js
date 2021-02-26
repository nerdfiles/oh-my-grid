/**
 * @module infrastructure/logging/index
 */
const fs = require('fs');
const winston = require('winston');


!fs.existsSync('logs') && fs.mkdirSync('logs');

module.exports = ({ config }) => {
  // eslint-disable-next-line new-cap
  return new winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File(Object.assign(config.LOGGING, {
        filename: `logs/${config.env}.log`
      }))
    ]
  });
};

// eof
