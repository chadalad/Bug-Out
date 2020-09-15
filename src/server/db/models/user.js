const {
  STRING, UUID, UUIDV4, ENUM, INTEGER,
} = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db');

const User = db.define('user', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  role: {
    type: ENUM,
    values: ['admin', 'guest', 'member'],
    allowNull: true,
  },
  highScore: {
    type: INTEGER,
    defaultValue: 0,
  },
  gamesPlayed: {
    type: INTEGER,
    defaultValue: 0,
  },
  gamesWon: {
    type: INTEGER,
    defaultValue: 0,
  },
});

User.beforeCreate(async (instance) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(instance.password, saltRounds);
  instance.password = hash;
});

module.exports = User;
