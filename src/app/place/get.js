/**
 * @name get
 * @module app/place
 * @description
 * Get all places.
 */
module.exports = ({ placeRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() => placeRepository.getAll({
        attributes: [
          'id', 'isDeleted', 'createdBy', 'updatedBy',
          'latitude', 'longitude'
        ]
      }))
      .catch(error => {
        throw new Error(error);
      })
  }

  return {
    all
  };
};

// EOF
