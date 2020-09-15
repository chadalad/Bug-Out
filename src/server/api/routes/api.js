const { Router } = require('express');
const bcrypt = require('bcrypt');
const {
  models: { User, Session },
} = require('../../db/index');

const apiRouter = Router();

apiRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(401).send('failure');
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const usersSession = await Session.findByPk(req.session_id);
      await usersSession.setUser(user);
      res.status(200).send(user);
    } else {
      res.status(401).send('failure');
    }
  }
});

apiRouter.get('/whoami', (req, res) => {
  if (req.user) {
    res.send({
      email: req.user.email,
      role: req.user.role,
      loggedIn: true,
    });
  } else {
    res.send({
      email: null,
      role: 'guest',
      loggedIn: false,
    });
  }
});

module.exports = {
  router: apiRouter,
};
