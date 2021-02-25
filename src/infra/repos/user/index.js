/**
 * @name index
 * @module infrastructure/repositories/user
 */
const { toEntity } = require('./transform');
const { encryptPassword, comparePassword } = require('../../encryption');
const pry = require('pryjs');


module.exports = ({ model, database }) => {

  /**
   * @name getAll
   */
  const getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => database.firestore.getAll(docRefs));

  /**
   * @name create
   * @returns {object} user
   */
  const create = async (...args) => {
    return await model.add(...args);
  };

  const securePassword = (args) => {
    return encryptPassword(args.password);
  };

  /**
   * @name update
   * @returns {object} user
   */
  const update = async (...args) => 
    await model.doc(args.id).update(...args);

  /**
   * @name findById
   * @returns {object} user
   */
  const findById = async (...args) => 
    await model.where('id', '==', args.id).get();

  /**
   * @name findByEmail
   * @returns {object} user
   */
  const findByEmail = async (...args) => await model
    .where('email', '==', args.email)
    .get();

  /**
   * @name findOne
   * @returns {object} user
   */
  const findOne = async (...args) => await model
    .limit(1)
    .get();

  /**
   * @name validatePassword
   * @returns {boolean}
   */
  const validatePassword = (endcodedPassword) => (password) =>
    comparePassword(password, endcodedPassword);

  /**
   * @name destroy
   * @returns {object}
   */
  const destroy = async (...args) => 
    await model.doc(args.id).delete();

  return {
    getAll,
    create,
    update,
    findById,
    findByEmail,
    findOne,
    securePassword,
    validatePassword,
    destroy
  };
};

// EOF
