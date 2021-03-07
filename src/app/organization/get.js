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
        return organizationRepository._getAll();
        // return organizationRepository.listAll().then((dataRef) => {
        //   dataRef.forEach((ref) => {
        //     console.log(ref);
        //   });
        //   return dataRef;
        // });
        // return organizationRepository.getAll({
        //     attributes: [
        //       'id', 'email', 
        //       'isDeleted', 'createdBy', 'updatedBy'
        //     ]
        //   }).then(async function (_res) {
        //     const itemFormList = await transitionItem();
        //     return _res[0].get().then(function (r) {
        //       r.itemFormList = itemFormList;
        //       return r;
        //     });
        // });
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
