/**
 * @name place
 * @module infrastructure/database/models
 */
const collectionNamespace = 'places';

module.exports = (firestore) => {
  const Place = firestore.collection(collectionNamespace);

  const placeModel = {
    name: collectionNamespace,
    model: Place
  };

  return placeModel;
};

// EOF
