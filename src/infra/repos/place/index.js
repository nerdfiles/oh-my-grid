/**
 * @module infrastructure/repositories/place/index
 * @description
 * Repo/methods for places.
 */
const { toEntity } = require('./transform.js');


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
   * @name prev
   * @returns {undefined}
   */
  const prev = async (...args) => {
    let payload = args[0];
    let docRef = model.doc(payload.id);
    let snapshot = await docRef.get();
    let last = snapshot.docs[snapshot.docs.length - 1];
    return last.data();
  };

  /**
   * @name next
   * @returns {undefined}
   */
  const nextItem = async (...args) => {
    let payload = args[0];
    const docRef = model.doc(payload.id);
    const snapshot = (await docRef.get()).data();
    const start = await model
      .orderBy('createdAt')
      .startAfter(snapshot.createdAt)
      //.limitToLast(1)
      //.startAt(snapshot)
      //.offset(1)
      .limit(1)
      .get();
    let list = [];
    start.forEach((d) => {
      list.push(d.data());
    });
    return list;

  };

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
    destroy,
    nextItem,
    prev
  };
};

// EOF
