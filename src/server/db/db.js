const dotenv = require('dotenv');

dotenv.config();
const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL
     || 'postgres://postgres:jjf11ltf8@localhost:5432/BugOut',
  // "posgres://localhost:5432/BugOut",
  {
    logging: false,
  },
);

module.exports = db;
