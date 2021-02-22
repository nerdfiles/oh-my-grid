/**
 * @name token
 * @module infrastructure/repositories
 */

module.exports = ({ jwt }) => {
  const s = jwt.encrypt('etc');
  return {
    s
  };
};

// EOF
