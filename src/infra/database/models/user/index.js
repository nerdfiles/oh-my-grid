/**
 * @module infrastructure/database/models/user/index
 */
const collectionNamespace = 'users';

module.exports = (firestore) => {
  const User = firestore.collection(collectionNamespace);

  const userModel = {
    name: collectionNamespace,
    model: User
  };

  return userModel;
};

// EOF
