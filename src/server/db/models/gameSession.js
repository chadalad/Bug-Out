const {
  UUID, UUIDV4, INTEGER, ENUM, BOOLEAN, STRING,
} = require('sequelize');
const db = require('../db');

const GameSession = db.define('gameSession', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  rounds: {
    type: INTEGER,
    defaultValue: 1,
  },
  difficulty: {
    type: ENUM('Easy', 'Medium', 'Hard'),
    allowNull: false,
    defaultValue: 'Easy',
  },
  active: {
    type: BOOLEAN,
    defaultValue: false,
  },
  private: {
    type: BOOLEAN,
    defaultValue: true,
  },
  code: {
    type: STRING,
    allowNull: true,
  },
});

module.exports = GameSession;
