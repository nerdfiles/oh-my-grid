/**
 * @name container
 * @module core
 * @description
 */
const { createContainer, asValue, asFunction } = require('awilix');

const app = require('../app');
const server = require('../inter/http/server');
const router = require('../inter/http/router');
const auth = require('../inter/http/authn');
const config = require('../../config');
const logger = require('../infra/logging');
const database = require('../infra/database');
const jwt = require('../infra/jwt');
const response = require('../infra/support/response');
const date = require('../infra/support/date');
const repository = require('../infra/repos');


const container = createContainer();

container
  .register({
    app: asFunction(app).singleton(),
    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton(),
    database: asFunction(database).singleton(),
    auth: asFunction(auth).singleton(),
    jwt: asFunction(jwt).singleton(),
    response: asFunction(response).singleton(),
    date: asFunction(date).singleton(),
    config: asValue(config),
    repository: asFunction(repository).singleton()
  });

module.exports = container;

// EOF
