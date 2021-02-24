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
  },
  API_KEY: process.env.FB_API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  PROJECT_ID: process.env.PROJECT_ID,
  STORAGE_BUCKET:process.env.STORAGE_BUCKET,
  MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
  APP_ID: process.env.APP_ID,
  MEASUREMENT_ID: process.env.MEASUREMENT_ID

};

// EOF
