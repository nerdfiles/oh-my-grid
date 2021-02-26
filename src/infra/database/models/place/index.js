/**
 * @module infrastructure/database/models/place/index
 */
module.exports = (firestore) => {
  const collectionNamespace = 'places';
  const Place = firestore.collection(collectionNamespace);

  const placeModel = {
    name: collectionNamespace,
    model: Place
  };

  return placeModel;
};

// EOF
