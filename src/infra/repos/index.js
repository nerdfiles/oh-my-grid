/**
 * @name repositories
 * @module infrastructure
 */
const User = require('./user');
const Post = require('./post');


module.exports = ({ database }) => {
  const userModel = database.models.users;
  const postModel = database.models.posts;

  return {
    userRepository: User({ model: userModel }),
    postRepository: Post({ model: postModel })
  };
};

// EOF
