/**
 * @module infrastructure/database/index
 */
const firebase = require('../vendor/firebase');


module.exports = ({ logger, config }) => {
  if (!config.database) {
    /* eslint-disable no-console */
    logger.error('Database config file log not found, disabling database.')
    /* eslint-enable no-console */
    return false;
  }

  return firebase({ config, basePath: __dirname });
};

// EOF
