/**
 * @name resources
 * @module interfaces/http
 */
const swaggerJSDoc = require('swagger-jsdoc');
const Status = require('http-status');
const { Router } = require('express');


module.exports = () => {
  const router = Router();

  const swaggerDefinition = {
    info: {
      title: 'Oh My Grid API Explorer',
      version: process.env.APP_VERSION,
      description: 'Available REST Endpoints of Oh My Grid RESTful API'
    },
    host: `${process.env.API_SWAGGER}:${process.env.PORT}/api/${process.env.APP_VERSION}`,
    basePath: '/',
    securityDefinitions: {
      JWT: {
        description: '',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  };

  const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['src/inter/http/resources/**/*.js']
  };

  const swaggerSpec = swaggerJSDoc(options);

  /**
   * @swagger
   * responses:
   *   Unauthorized:
   *     description: Unauthorized
   *   BadRequest:
   *     description: BadRequest / Invalid Input
   */

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Status
   *     description: Returns API status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: API Status
   */
  router.get('/', (req, res) => {
    res
      .status(Status.OK)
      .json({ status: 'API is live' });
  });

  router.get('/swagger.json', (req, res) => {
    res.status(Status.OK).json(swaggerSpec);
  });

  return router;
};


