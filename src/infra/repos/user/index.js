/**
 * @module infrastructure/repositories/user/index
 * @description
 * Actions map to repository methods.
 */
const { toEntity } = require('./transform');
const { encryptPassword, comparePassword } = require('../../encryption');


module.exports = ({ model, database }) => {

  /**
   * @name getAll
   * @returns {object}
   */
  const getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => database.firestore.getAll(...docRefs));

  /**
   * @name bulkCreate
   * @returns {object}
   */
  const bulkCreate = async (...args) => {

    const bulkWriter = database.bulkWriter();
    let collectionName = '';

    bulkWriter.create(firestore.collection(collectionName), {})
      .then(res => {
      });

    await bulkWriter.close().then(() => {
    });
  };

  const construct = async (...args) => {
    let payload = args[0];
    return await model.create(payload)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  };

  /**
   * @name create
   * @param {object} args - Payload to post to create a resource.
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
  const findByEmail = async (...args) => await model
    .where('email', '==', args.email)
    .limit(1)
    .get();

  /**
   * @name findOne
   * @returns {object}
   */
  const findOne = async (...args) => await model
    .limit(1)
    .get();

  /**
   * @name findOneAdmin
   * @returns {object}
   */
  const findOneAdmin = async () => await model
    .where('role', '==', 'admin')
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
    findOneAdmin,
    findOne,
    securePassword,
    validatePassword,
    destroy
  };
};

// EOF
