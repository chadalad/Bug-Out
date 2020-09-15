import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, FormControl } from '@chakra-ui/core';
import socket from '../utils/socket';
import { addMessage } from '../store/actions';

const ChatBox = ({ msgs, addMsg }) => {
  const [chatMsg, setChatMsg] = useState('');

  console.log('render', msgs);

  useEffect(() => {
    socket.on('message', (message) => {
      addMsg(message);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setChatMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chatMsg', chatMsg);
  };

  return (
    <FormControl>
      <div id="messagebox">
        {msgs ? (
          msgs.map((msg) => (
            <div key={msg.id}>
              <p>
                {msg.playerName}: {msg.text} @{msg.time}
              </p>
            </div>
          ))
        ) : (
          <p>No messages yet :(</p>
        )}
      </div>
      <Input
        id="msg"
        type="text"
        placeholder="type something, n00b"
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleSubmit} />
    </FormControl>
  );
};

const mapStateToProps = ({
  game, user, input, messages,
}) => {
  const msgs = messages;
  return {
    game,
    user,
    input,
    msgs,
  };
};

const mapDispatchToProps = (dispatch) => ({ addMsg: (msg) => dispatch(addMessage(msg)) });

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
