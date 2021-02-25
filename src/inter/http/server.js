/**
 * @name server
 * @module interfaces/http
 * @description
 * Server.
 */
const express = require('express');

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
