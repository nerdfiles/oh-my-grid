/**
 * @module interfaces/http/server
 * @description
 * Server.
 */
const express = require('express');
const openapi = require('express-openapi');
const path = require('path');


module.exports = ({ config, router, logger, auth }) => {
  const app = express();

  app.disable('x-powered-by');
  app.use(auth.initialize());

  // openapi.initialize({
  //   apiDoc: require('./api-doc.js'),
  //   app: app,
  //   paths: path.resolve(__dirname, 'resources')
  // });

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
