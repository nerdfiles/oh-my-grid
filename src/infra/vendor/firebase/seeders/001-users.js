/**
 * @module infrastructure/vendor/firebase/seeders/001-users.js
 */
const Faker = require('../../../support/fakers');
const container = require('../../../../container');
const postUsecase = require('../../../../app/user/post');


const { database } = container.cradle;

const FakerRepository = {
  bulkCreate: async () => {
    console.log('Bulk creating users...');
    const users = Faker('users');
    for (let userRef of users) {
      //database.models.users.add(userRef);
      let docRef = database.models.users.doc(userRef.id);
      await docRef.set(userRef);
    }
    return database.models.users;
  }
};

const initSeed = () => {
  let useCase = postUsecase({
    userRepository: FakerRepository
  });

  const usersData = useCase.bulkCreate();

  console.log('Created list of users:');
  usersData.then((usersDataRef) => {
    usersDataRef.onSnapshot((d) => {
      d.forEach((ref) => {
        console.log(ref.data());
      });
      process.exit(0);
    });
  })
  .catch(e => console.error(e));
};


initSeed();

// EOF
