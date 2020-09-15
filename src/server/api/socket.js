const socketio = require('socket.io');
const { app, server } = require('./server');
const formatMessage = require('../utils/formatMessage');

const io = socketio(server);

const botName = 'BugOut Bot';

io.on('connection', (socket) => {
  console.log(socket);
  socket.emit(
    'message',
    formatMessage(botName, 'Confirmation: You have connected!'),
  );

  // TODO - Add new user to message
  socket.broadcast.emit(
    'message',
    formatMessage(
      botName,
      'Talk $h!t with the competition. {user} has joined the fray!',
    ),
  );

  socket.on('chatMsg', (msg) => {
    io.emit('message', formatMessage('USER', msg));
  });

  socket.on('disconnect', () => {
    // TODO Add username to message
    io.emit('message', formatMessage(botName, '{user} has fled the scene!'));
  });
});

module.exports = { app, server };
