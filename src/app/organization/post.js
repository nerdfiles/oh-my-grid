/**
 * @module app/organization/post
 * @description
 * Apply transitions here to response from vendor database before passing into 
 * router.
 */
const { v4: uuidv4 } = require('uuid');
const { Organization } = require('../../domain/organization');
const { itemForms } = require('../../domain/organization/transitions');


module.exports = ({ organizationRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });
        const organization = Organization(entity);
        var res = {
          data: organizationRepository.create(organization),
          links: itemForms
        };
        return res;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    create
  };
};

// EOF
