/**
 * @module app/place/get
 * @description
 * Get all places.
 */
module.exports = ({ placeRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() => placeRepository.getAll()
      .then((documentSnapshots) => {
        return documentSnapshots.map((doc) => {
          if (doc.exists) {
            return doc.data();
          }
        });
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
