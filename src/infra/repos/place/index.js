/**
 * @module infrastructure/repositories/place/index
 * @description
 * Repo/methods for places.
 */
const { toEntity } = require('./transform');


module.exports = ({ model, database }) => {

  /**
   * @name getAll
   * @param {Object} args - Firestore clause (where, etc.); 
   * @returns {Object}
   */
  const _getAll = async (...args) => 
    await model
      .listDocuments().then((docRefs) => database.firestore.getAll(...docRefs));
  
  /**
   * @name getAll
   * @returns {Promise}
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
   * @name findOne
   * @returns {object}
   */
  const findOne = async (...args) => await model
    .limit(1)
    .get();

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
    findOne,
    destroy
  };
};

// EOF
