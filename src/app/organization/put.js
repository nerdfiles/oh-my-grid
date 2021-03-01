/**
 * @module app/organization/put
 * @description
 * PUT for Organization.
 */
const { Organization } = require('../../domain/organization');


module.exports = ({ organizationRepository }) => {
  const update = ({ id, body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const organization = Organization(body);
        await organizationRepository.update(organization, {
          where: { id }
        });

        resolve(organization);
      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    update
  };
};

// EOF
