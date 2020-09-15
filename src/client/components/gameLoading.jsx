/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Text, Box } from '@chakra-ui/core';

const LoadingGame = () => (
  <div
    style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text fontSize="6xl">Waiting for players...</Text>
    <Box
      w="100%"
      p={4}
      borderWidth="1px"
      borderColor="black"
      borderStyle="solid"
      maxW="sm"
      rounded="lg"
    >
      <Text>Players in game:</Text>
    </Box>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(LoadingGame);
