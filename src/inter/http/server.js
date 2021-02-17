/**
 * @name server
 * @module interfaces/http
 * @description
 */
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const casl = require('casl')
const seneca = require('seneca')
const clusterluck = require('clusterluck')


module.exports = ({ config, router, logger, auth }) => {
  const app = express();

  app.disable('x-powered-by');
  app.use(auth.initialize());
  app.use(router);

  app.use(express.static('public'));

  return {
    app,
    start: () => new Promise((resolve) => {
      const http = app.listen(config.PORT, () => {
        const { port } = http.address();
        logger.info(`🎉 API - Open http://localhost:${port}`);
      });
    })
  };
};

// EOF
