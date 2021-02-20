//const firebase = require('src/infra/vendor/firebase');
const firebase = require('../vendor/firebase');

module.exports = ({ logger, config }) => {
  if (!config.db) {
    /* eslint-disable no-console */
    logger.error('Database config file log not found, disabling database.')
    /* eslint-enable no-console */
    return false;
  }

  return firebase({ config, basePath: __dirname });
}

// EOF
