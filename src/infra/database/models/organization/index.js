/**
 * @name organization
 * @module infrastructure/database/models
 */
const collectionNamespace = 'organizations';

module.exports = (firestore) => {
  const Organization = firestore.collection(collectionNamespace);

  const organizationModel = {
    name: collectionNamespace,
    model: Organization
  };

  return organizationModel;
};

// EOF
