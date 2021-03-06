 /**
 * @module app/organization/get
 * @description
 * Get all organizations.
 */
const { itemForms } = require('../../domain/organization/transitions');
const { Organization } = require('../../app/organization');

module.exports = ({ organizationRepository }) => {

  const transitionItem = () => {
    return Promise
      .resolve()
      .then(() => {
        return itemForms.map((itemRef) => {
          return itemRef;
        });
      })
  };

  const all = () => {
    return Promise
      .resolve()
      .then(() => {
        return organizationRepository.getAll()
          .then((documentSnapshots) => {
            return documentSnapshots.map((doc) => {
              if (doc.exists) {
                return doc.data();
              }
            });
          });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  return {
    all
  };
};

// EOF
