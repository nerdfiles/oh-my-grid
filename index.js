/**
 * @name start
 * @module base
 */
const container = require('./src/container');
const app = container.resolve('app');


app
  .start()
  .catch((error) => {
    app.logger.error(error.stack);
    process.exit();
  });

// EOF
