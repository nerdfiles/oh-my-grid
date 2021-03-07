/**
 * @module app/place/get
 * @description
 * Get all places.
 */
module.exports = ({ placeRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() => placeRepository.getAll({
        attributes: [
          'id', 'latitude', 'longitude'
        ]
      })
      .then(async (_res) => {
        return _res[0].get().then((r) => {
          console.log(r);
          return r;
        });
      })
      )
      .catch(error => {
        throw new Error(error);
      })
  }

  return {
    all
  };
};

// EOF
