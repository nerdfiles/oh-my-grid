/**
 * @module infrastructure/encryption/index
 * @description
 * Salt and compare passwords, etc.
 */
const bcrypt = require('bcrypt');


const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();
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
