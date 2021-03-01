/**
 * @module interfaces/http/resources/user/instance
 * @description
 * Should transitions be a containerized module?
 */
const container = require('../../../../container');
const { post, get } = require('../../../../app/user');


module.exports = () => {
  const { 
    repository: {
      userRepository
    },
    apiService
  } = container.cradle;

  const postUseCase = post({ userRepository });
  const getUseCase = get({ userRepository });

  return {
    postUseCase,
    getUseCase
  };
};

