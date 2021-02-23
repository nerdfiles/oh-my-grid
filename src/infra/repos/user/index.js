/**
 * @name index
 * @module infrastructure/repositories/user
 */
const { toEntity } = require('./transform');
const { comparePassword } = require('../../encryption');


module.exports = ({ model, db }) => {

  /**
   * @name getAll
   */
  const getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => db.firestore.getAll(docRefs));

  const create = async (...args) =>
    await model.add(...args);

  const update = async (...args) => 
    await model.doc(args.id).update(...args);

  const findById = async (...args) => 
    await model.where('id', '==', args.id).get();

  const findByEmail = async (...args) =>
    await model.where('email', '==', args.email).get();

  const findOne = async (...args) =>
    await model.limit(1).get();

  const validatePassword = (endcodedPassword) => (password) =>
    comparePassword(password, endcodedPassword);

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
