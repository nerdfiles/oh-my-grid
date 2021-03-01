/**
 * @module infrastructure/repositories/index
 */
const User = require('./user');
const Organization = require('./organization');


module.exports = ({ database }) => {
  const userModel = database.models.users;
  const organizationModel = database.models.organizations;

  return {
    userRepository: User({ model: userModel, database }),
    organizationRepository: Organization({ model: organizationModel, database })
  };
};

// EOF
