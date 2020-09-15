import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/core';
import Editor from './editor';

const GamePage = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <Box bg="tomato" h="80vh" w="110px" m={3} p={4} color="white" borderWidth="3px" borderColor="#c90c0c" borderStyle="solid" rounded="lg">
        Competition
      </Box>
    </div>
    <Editor />
    <div>
      <Box bg="#15c912" h="10vh" w="110px" m={3} p={4} color="white" borderWidth="3px" borderColor="#1d7a1b" borderStyle="solid" rounded="lg">
        Time:
      </Box>
      <Box bg="#fabc41" h="60vh" w="110px" m={3} p={4} color="white" borderWidth="3px" borderColor="#d49619" borderStyle="solid" rounded="lg">
        Power Ups
      </Box>
    </div>
  </div>
);

const mapStateToProps = (props) => (props);
export default connect(mapStateToProps, null)(GamePage);
