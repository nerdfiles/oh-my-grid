/**
 * @module app/place
 * @description
 * PUT requests for Place.
 */
const { Place } = require('../../domain/place');


/**
 * @exports app/place/put
 * @param {Object} container - Container.
 * @param {Object} container.placeRepository - Repo for place.
 * @description
 * Componenture for PUT requests under the Place application.
 */
module.exports = ({ placeRepository }) => {
  const update = ({ id, body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const place = Place(body);
        await placeRepository.update(place, {
          where: { id }
        });

        resolve(place);
      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    update
  };
};

// EOF
