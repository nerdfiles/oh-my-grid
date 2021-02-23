/**
 * @name index
 * @module infrastructure/repositories/user
 */
const { toEntity } = require('./transform');
const { comparePassword } = require('../../encryption');


module.exports = ({ model, database }) => {

  /**
   * @name getAll
   */
  const getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => database.firestore.getAll(docRefs));

  /**
   * @name create
   * @returns {object} model
   */
  const create = async (...args) =>
    await model.add(...args);

  /**
   * @name update
   * @returns {object} model
   */
  const update = async (...args) => 
    await model.doc(args.id).update(...args);

  /**
   * @name findById
   * @returns {object} model
   */
  const findById = async (...args) => 
    await model.where('id', '==', args.id).get();

  /**
   * @name findByEmail
   * @returns {object} model
   */
  const findByEmail = async (...args) =>
    await model.where('email', '==', args.email).get();

  /**
   * @name findOne
   * @returns {object}
   */
  const findOne = async (...args) =>
    await model.limit(1).get();

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
    validatePassword,
    destroy
  };
};

// EOF
