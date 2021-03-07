/**
 * @module app/place/post
 * @description
 * POST.
 */
const { v4: uuidv4 } = require('uuid');
const { Place } = require('../../domain/place');


module.exports = ({ placeRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });
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
