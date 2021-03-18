/**
 * @module infrastructure/database/index
 */
const firebase = require('../vendor/firebase');
const mongo = require('../vendor/mongo');
const bedquilt = require('../vendor/bedquilt');


module.exports = ({ logger, config }) => {
  if (!config.database) {
    /* eslint-disable no-console */
    logger.error('Database config file log not found, disabling database.')
    /* eslint-enable no-console */
    return false;
  }

  try {
    if (config.VENDOR.includes('firebase'))
      return firebase({ config, basePath: __dirname });
    else if (config.VENDOR.includes('mongo'))
      return mongo({ config, basePath: __dirname });
    else if (config.VENDOR.includes('bedquilt'))
      return bedquilt({ config, basePath: __dirname });
    else
      return firebase({ config, basePath: __dirname });
  } catch (e) {
    console.error(e);
  }
};

// EOF
