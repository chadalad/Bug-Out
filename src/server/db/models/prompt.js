const { STRING, TEXT } = require('sequelize');
const db = require('../db');

const Prompt = db.define('prompt', {
  id: {
    type: STRING,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  difficulty: {
    type: STRING,
    allowNull: false,
  },
  prompt: {
    type: TEXT,
  },
  slug: {
    type: STRING,
  },
  specs: {
    type: STRING,
  },
});

module.exports = Prompt;
