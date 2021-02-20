/**
 * @name
 * @module
 */
module.exports = ({ jwt }) {
  const s = jwt.encrypt('etc');
  return {
    s
  };
};


// EOF
