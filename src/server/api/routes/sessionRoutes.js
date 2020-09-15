/* eslint-disable no-await-in-loop */
const { Router } = require('express');
const { models: { Session } } = require('../../db/index');

const sessionRouter = Router();

// updates name of the session
sessionRouter.put('/updateName', async (req, res) => {
  try {
    const { name } = req.body;
    const session = await Session.findOne({ where: { id: req.session_id } });
    session.update({ name });
    res.status(201).send();
  } catch (e) {
    console.log('Error updating name');
    console.log(e);
  }
});

module.exports = {
  path: '/session',
  router: sessionRouter,
};
