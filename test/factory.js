/**
 * @module test/factory
 * We need to find a way to user the repositories for our test that it we will 
 * have minimum impact once we change our ORM or our DATABASE
 */
const { curry } = require('ramda');

/**
 * @name models
 * @param {string} name - Name of a given model.
 */
const models = (name) => app.resolve('database').models[name];

/**
 * @name repository
 */
const repository = curry((repo, model) => {
  return repo(model)
});


module.exports = {
  models,
  repository
};

// EOF
