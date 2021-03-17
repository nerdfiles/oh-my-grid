/**
 * @module infrastructure/repositories/organization/index
 * @description
 * Actions map to repository methods.
 */
const { toEntity } = require('./transform');
const { encryptPassword, comparePassword } = require('../../encryption');


module.exports = ({ model, database }) => {

  const getClass = () => ([]);
  const getRel = () => ([]);
  const getLinks = () => ([]);

  /**
   * @name getAll
   * @returns {object}
   */
  const getAll = async () => 
    await model.listDocuments()
      .then((docRefs) => database.firestore.getAll(...docRefs));

  /**
   * @name create
   * @returns {object}
   */
  const create = async (...args) => {
    let payload = args[0];
    let docRef = await model.doc(payload.id);
    await docRef.set(payload);
    return docRef.get().then((documentSnapshot) => {
      return documentSnapshot.data();
    })
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
  const findByEmail = async (...args) => 
    await model.where('email', '==', args.email).get();

  /**
   * @name findOne
   * @returns {object}
   */
  const findOne = async (...args) =>
    await model.limit(1).get();

  const readContactPoint = async => {
  };

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
    destroy,
    getClass,
    getRel,
    getLinks
  };
};

// EOF
