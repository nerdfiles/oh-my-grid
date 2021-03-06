/**
 * @module interfaces/http/router/index
 */
const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const { Router } = require('express');
const { partialRight } = require('ramda');

const { createController } = require('../utils');
const httpLogger = require('../middleware/http-logger');
const errorHandler = require('../middleware/error-handler');

module.exports = ({ config, logger, database }) => {
  const router = Router();

  /* istanbul ignore if */
  if (config.env === 'development') {
    router.use(statusMonitor());
  }

  /* istanbul ignore if */
  if (config.env !== 'test') {
    router.use(httpLogger(logger));
  }

  const apiRouter = Router();

  apiRouter
    .use(cors({
      origin: [
        'http://localhost:4200'
      ],
      methods: [
        'HEAD',
        'OPTIONS',
        'GET', 
        'POST', 
        'PUT', 
        'PATCH',
        'DELETE'
      ],
      allowedHeaders: [
        'Content-Type', 
        'Authorization'
      ]
    }))
    .use(bodyParser.json())
    .use(compression());

  apiRouter.use('/', createController('index'));
  apiRouter.use('/auth', createController('auth').router);
  apiRouter.use('/users', createController('user').router);
  apiRouter.use('/organizations', createController('organization').router);
  apiRouter.use('/token', createController('token').router);
  apiRouter.use('/places', createController('place').router);

  router.use(`/api`, apiRouter);
  router.use(`/api/${config.VERSION}`, apiRouter);

  router.use(partialRight(errorHandler, [logger, config]));

  return router;
};

// EOF
