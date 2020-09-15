const User = require('./user');
const Session = require('./session');
const GameSession = require('./gameSession');
const Prompt = require('./prompt');

User.hasMany(Session);
Session.belongsTo(User);

GameSession.hasMany(Session);
Session.belongsTo(GameSession);

GameSession.hasMany(Session);
Session.belongsTo(GameSession);

module.exports = {
  models: {
    User,
    Session,
    GameSession,
    Prompt,
  },
};
