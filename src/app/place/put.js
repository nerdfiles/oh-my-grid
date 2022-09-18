/**
 * @module app/place/put
 * @param {Object} container - Container.
 * @param {Object} container.placeRepository - Repo for place.
 * @description
 * Componenture for PUT requests under the Place application.
 */
const { Place } = require('../../domain/place');

module.exports = ({ placeRepository }) => {

  /**
   * @name update
   * @description
   * @param {}
   */
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
    });
  };

  return {
    update
  };
};

// EOF
