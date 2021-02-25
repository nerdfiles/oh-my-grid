/**
 * @name put
 * @module app/place
 * @description
 */
const { Place } = require('../../domain/place');


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
