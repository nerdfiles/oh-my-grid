/**
 * @module interfaces/http/resources/place/instance
 */
const container = require('../../../../container');
const { post, get, put, remove } = require('../../../../app/place');


module.exports = () => {
  const { 
    repository: {
      placeRepository,
      userRepository
    },
    apiService
  } = container.cradle;

  const postUseCase = post({ placeRepository, userRepository });
  const getUseCase = get({ placeRepository, userRepository });
  const putUseCase = put({ placeRepository, userRepository });
  const removeUseCase = remove({ placeRepository, userRepository });

  return {
    postUseCase,
    getUseCase,
    putUseCase,
    removeUseCase
  };
};

