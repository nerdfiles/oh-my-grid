/**
 * @module app/index
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
