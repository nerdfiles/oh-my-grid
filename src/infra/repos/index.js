/**
 * @module infrastructure/repositories/index
 */
const User = require('./user');
const Organization = require('./organization');
const Place = require('./place');

module.exports = ({ database }) => {
  const userModel = database.models.users;
  const organizationModel = database.models.organizations;
  const placeModel = database.models.places;

  return {
    userRepository: User({ model: userModel, database }),
    organizationRepository: Organization({ model: organizationModel, database }),
    placeRepository: Place({ model: placeModel, database })
  };
};

// EOF
