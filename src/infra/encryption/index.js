/**
 * @name encryption
 * @module infrastructure
 */
const bcrypt = require('bcrypt');


const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  console.log(password)
  console.log(salt)
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, encodedPassword) => {
  return bcrypt.compareSync(password, encodedPassword);
};

module.exports = {
  encryptPassword,
  comparePassword
};

// EOF
