const gameRouter = require('./gameRoutes');
const userRouter = require('./userRoutes');
const sessionRouter = require('./sessionRoutes');
const apiRouter = require('./api');

module.exports = {
  apiRouter,
  sessionRouter,
  userRouter,
  gameRouter,
};
