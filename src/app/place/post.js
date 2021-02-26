/**
 * @module app/place/post
 * @description
 * POST.
 */
const { Place } = require('../../domain/place');


module.exports = ({ placeRepository, reply }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const entity = Object.assign({}, body, {});
        const place = Place(entity);
        return placeRepository.create(place);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    create
  };
};

// EOF
