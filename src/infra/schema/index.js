/**
 * @module infrastructure/schema/index
 */
const bq = require('bedquilt');
const BedquiltClient = bq.BedquiltClient;

const Client = new Promise((resolve, reject) => {
  BedquiltClient.connect('localhost', (err, client) => {
    if (err) {
      return reject(err);
    }
    resolve(client);
  })
});

module.exports = {
  Place: Client().then((client) => {
    let places = client.collection('places');
    return places;
  }),
  Organization: Client().then((client) => {
    let organizations = client.collection('organizations');
    return organizations;
  })
};

// EOF
