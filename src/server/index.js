const dotenv = require('dotenv');
const chalk = require('chalk');
const { startServer } = require('./api/index');

const { seed, sync } = require('./db/index');

dotenv.config();

const startApplication = async () => {
  const { NODE_ENV } = process.env;
  console.log(chalk.cyanBright('Application started', `Env = ${NODE_ENV}`));

  if (NODE_ENV === 'development') {
    await seed();
  } else {
    await sync();
  }
  await startServer();
  console.log(chalk.greenBright('App started Successfully'));
};

startApplication();
