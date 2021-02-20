/**
 * @name repositories
 * @module infrastructure
 */
const User = require('./user');
const Post = require('./post');
const Place = require('./place');


module.exports = ({ database }) => {
  const userModel = database.models.users;
  const postModel = database.models.posts;
  const placeModel = database.models.places;
  const feedModel = database.models.feeds;
  const messageModel = database.models.messages;
  const organizationModel = database.models.organizations;
  const policyModel = database.models.policies;
  const tokenModel = database.models.tokens;

  return {
    userRepository: User({ model: userModel }),
    postRepository: Post({ model: postModel })
  };
};

// EOF
