/**
 * @name date
 * @module infrastructure/support
 */
const moment = require('moment');


module.exports = ({ config }) => {
  const currentDate = moment().tz(config.TIMEZONE);

  const addHour = (duration) => currentDate.add(duration, 'hours');

  return {
    addHour
  };
};

// eof

