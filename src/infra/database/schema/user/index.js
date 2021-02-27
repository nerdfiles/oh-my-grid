module.exports = () => {
  const User = new mongoose.Schema({
    name: 'User'
  });

  return User;
};
