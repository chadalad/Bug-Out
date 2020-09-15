/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Button, Input, FormControl, Text, Box,
} from '@chakra-ui/core';
import { getCurrentGameThunk, findRandomGameThunk, updateNameThunk } from '../store/thunks/gameThunks';

const LandingPage = (props) => {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [noName, setNoName] = useState(false);
  const { history, getCurrentGame, updateName } = props;
  useEffect(() => {
    getCurrentGame();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <Box w="100%" bg="#4287f5" p={4} borderWidth="3px" borderColor="#0c2c61" borderStyle="solid" maxW="sm" rounded="lg">
          <Text fontSize="6xl" color="white">Bug Out!</Text>
          <FormControl>
            <Input
              placeholder="Enter your name to play"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              width="200px"
              variantColor="red"
              margin="5px"
              onClick={async () => {
                await props.findRandomGame(game.id);
                setName('');
              }}
            >Join Random Room
            </Button>
            <Button
              width="200px"
              variantColor="orange"
              margin="5px"
              onClick={() => {
                if (name === '') {
                  setNoName(true);
                } else {
                  updateName(name);
                  history.push('/join');
                  setName('');
                }
              }}
            >Join Game
            </Button>
          </FormControl>
          <Button
            width="200px"
            variantColor="yellow"
            margin="5px"
            onClick={() => {
              if (name === '') {
                setNoName(true);
              } else {
                updateName(name);
                history.push('/create');
                setName('');
              }
            }}
          >Create Game
          </Button>
          <Button
            width="200px"
            variantColor="green"
            margin="5px"
            onClick={() => history.push('/login')}
          >Login
          </Button>
          <Button
            width="200px"
            variantColor="purple"
            margin="5px"
            onClick={() => history.push('/howtoplay')}
          >How To Play
          </Button>
        </Box>
      </div>

    </div>
  );
};

const mapStateToProps = ({ user, game, input }) => ({ user, game, input });

const mapDispatchToProps = (dispatch) => ({
  getCurrentGame: () => dispatch(getCurrentGameThunk()),
  findRandomGame: (currentGameId) => dispatch(findRandomGameThunk(currentGameId)),
  updateName: (name) => dispatch(updateNameThunk(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
