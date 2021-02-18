/**
 * @name instance
 * @module interfaces/http/resources/user
 */
const container = require('src/container');
const { post } = require('src/app/user');


module.exports = () => {
  const { 
    repository: {
      userRepository
    } 
  } = container.cradle;

  const postUseCase = post({ userRepository });

  return {
    postUseCase
  };
};

