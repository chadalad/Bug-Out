const moment = require('moment');

const formatMessage = (playerName, text) => {
  const currentTime = moment();

  return {
    playerName,
    text,
    time: currentTime.format('h:mm a'),
    id: currentTime.format(),
  };
};

module.exports = formatMessage;
