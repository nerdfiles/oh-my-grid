/**
 * @name index
 * @module app
 */
module.exports = ({ server, database }) => {
  return {
    start: () =>
      Promise
        .resolve()
        .then(database.authenticate)
        .then(server.start)
  };
};

// EOF
