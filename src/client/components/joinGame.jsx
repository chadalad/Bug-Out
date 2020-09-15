/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Text, Box, Select, FormControl, Input, FormLabel, Button,
} from '@chakra-ui/core';
import axios from 'axios';
import store from '../store/index';
import { getCurrentGameThunk } from '../store/thunks/gameThunks';

const JoinGame = (props) => {
  const [gameCode, setGameCode] = useState('');
  const [gameFound, setGameFound] = useState(true);
  const host = window.location.hostname;
  const PORT = process.env.PORT || 3000;
  console.log('port is ', PORT);

  useEffect(() => {
    props.getCurrentGame();
  }, []);

  const { game, joinGame } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Box w="100%" p={10} borderWidth="1px" rounded="lg" variantColor="teal" borderStyle="solid" maxW="sm">
          <Text fontSize="4xl">Join Game</Text>
          <FormControl>
            <Input
              placeholder="Enter Game Code"
              type="text"
              focusBorderColor="teal"
              size="lg"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
            />
            {!gameFound ? (<Text> Game not found </Text>) : null}
            <Button
              width="200px"
              variantColor="teal"
              variant="outline"
              margin="5px"
              onClick={() => {
                console.log('hitting ', `${host}:${PORT}/api/game/joinGame`);
                axios.put('/game/joinGame', { currentGameId: game.id, gameCode })
                  .then((res) => {
                    setGameFound(true);
                    props.history.push('/waiting');
                  })
                  .catch((e) => {
                    setGameFound(false);
                  });
              }}
            >Join Game!
            </Button>
          </FormControl>
          <Box w="100%">
            <Button
              width="200px"
              variantColor="teal"
              variant="outline"
              margin="5px"
              onClick={() => props.history.push('/create')}
            >Create Game
            </Button>
          </Box>
          <Box>
            <Button
              width="200px"
              variantColor="teal"
              variant="outline"
              margin="5px"
              onClick={() => props.history.push('/login')}
            >
              Login
            </Button>
          </Box>
          <Box>
            <Button
              width="200px"
              variantColor="teal"
              variant="outline"
              margin="5px"
              onClick={() => props.history.push('/')}
            >Main Page
            </Button>
          </Box>
        </Box>
      </div>
      <Text>How to play:</Text>
    </div>
  );
};

const mapStateToProps = (state) => ({
  game: state.game,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentGame: () => dispatch(getCurrentGameThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);
