const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('../db');

const Session = db.define('session', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
});

module.exports = Session;
