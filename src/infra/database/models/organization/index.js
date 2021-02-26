/**
 * @module infrastructure/database/models/organization/index
 */
module.exports = (firestore) => {
  const collectionNamespace = 'organizations';
  const Organization = firestore.collection(collectionNamespace);

  const organizationModel = {
    name: collectionNamespace,
    model: Organization
  };

  return organizationModel;
};

// EOF
