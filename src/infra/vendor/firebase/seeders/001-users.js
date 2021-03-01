/**
 *
 */
const Faker = require('../../../support/fakers');
const container = require('../../../../container');
const postUsecase = require('../../../../app/user/post');

const { database } = container.cradle;

const FakerRepository = {
  bulkCreate: () => {
    console.log('Bulk creating users...');
    const users = Faker('users');
    for (let userRef of users) {
      database.models.users.add(userRef);
    }
    return database.models.users;
  }
};

let useCase = postUsecase({
  userRepository: FakerRepository
});

const usersData = useCase.bulkCreate();

console.log('Created:');
usersData.then((usersDataRef) => {
  console.log(usersDataRef);
})

// EOF
