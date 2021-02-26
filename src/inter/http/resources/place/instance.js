/**
 * @module interfaces/http/resources/place/instance
 */
const container = require('../../../../container');
const { post, get, put, remove } = require('../../../../app/place');


module.exports = () => {
  const { 
    repository: {
      placeRepository
    },
    apiService
  } = container.cradle;

  const postUseCase = post({ placeRepository });
  const getUseCase = get({ placeRepository });
  const putUseCase = put({ placeRepository });
  const removeUseCase = remove({ placeRepository });

  return {
    postUseCase,
    getUseCase,
    putUseCase,
    removeUseCase
  };
};

