/**
 * @module app/organization/post
 * @description
 */
const { v4: uuidv4 } = require('uuid');
const { Organization } = require('../../domain/organization');


module.exports = ({ organizationRepository, reply }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });
        const organization = Organization(entity);
        return organizationRepository.create(organization);
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
