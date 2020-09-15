// import chalk from 'chalk';
const chalk = require('chalk');
// import { sync } from './src/server/db/index';
const { sync } = require('./src/server/db/index');
// import { models } from './src/server/db/models/index';
const { models } = require('./src/server/db/models/index');

const users = [
  {
    email: 'admin',
    name: 'admin',
    password: 'password',
    role: 'admin',
  },
  {
    email: 'member',
    name: 'member',
    password: 'password',
    role: 'member',
  },
];

const seed = async () => {
  try {
    users.map((user) => models.User.create(user));
    models.GameSession.create();
    console.log(chalk.green('DB SEEDED'));
  } catch (e) {
    console.log(chalk.red('ERROR SEEDING DB'), e);
  }
};

sync(true)
  .then(() => seed())
  .catch(console.log);
