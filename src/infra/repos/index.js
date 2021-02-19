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

  return {
    userRepository: User({ model: userModel }),
    postRepository: Post({ model: postModel })
  };
};

// EOF
