/**
 * @name development
 * @module config/environments
 */
module.exports = {
  VERSION: process.env.APP_VERSION,
  PORT: process.env.PORT || 4000,
  TIMEZONE: process.env.TIMEZONE,
  LOGGING: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false
  },
  AUTH_SECRET: process.env.SECRET,
  API_KEY: process.env.API_KEY,
  AUTH_SESSION: {
    session: false
  }
};

// EOF
