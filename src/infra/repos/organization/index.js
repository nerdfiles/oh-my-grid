/**
 * @module infrastructure/repositories/organization/index
 * @description
 * Actions map to repository methods.
 */
const { toEntity } = require('./transform');
const { encryptPassword, comparePassword } = require('../../encryption');


module.exports = ({ model, database }) => {

  /**
   * @name _getAll
   * @returns {object}
   */
  const _getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => database.firestore.getAll(docRefs));

  /**
   * @name getAll
   * @returns {object}
   */
  const getAll = async (...args) => 
    await model.listDocuments();

  /**
   * @name create
   * @returns {object}
   */
  const create = async (...args) => {
    let docRef = await model.doc(args[0].id);
    let _createdOrganization = await docRef.set(args[0]);
    return args[0];
  };

  /**
   * @name update
   * @returns {object}
   */
  const update = async (...args) => 
    await model.doc(args.id).update(...args);

  /**
   * @name findById
   * @returns {object}
   */
  const findById = async (...args) => 
    await model.where('id', '==', args.id).get();

  /**
   * @name findByEmail
   * @returns {object}
   */
  const findByEmail = async (...args) => await model
    .where('email', '==', args.email)
    .get();

  /**
   * @name findOne
   * @returns {object}
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
   * @name securePassword
   * @returns {string} - An encrypted and salted password.
   */
  const securePassword = (args) => 
    encryptPassword(args.password);

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
