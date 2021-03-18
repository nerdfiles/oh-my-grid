/**
 * @module infrastructure/database/bedquilt/user/index
 */
module.exports = (bq) => {
  const collectionNamespace = 'users';
  const model = bq.collection(collectionNamespace);

  const userModel = {
    name: collectionNamespace,
    model: model
  };

  return userModel;

};

// EOF
