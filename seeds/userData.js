const { User } = require('../models');

const userdata =
[
  {
    "username": "Alexx",
    "password": "password"
  },
  {
    "username": "Aakash",
    "password": "password"
  },
  {
    "username": "Andrew",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;