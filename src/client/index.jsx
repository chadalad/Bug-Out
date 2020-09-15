/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@chakra-ui/core';
import {
  LoginForm, LoggedIn, About, LandingPage, CreateGame, LoadingGame, WaitingRoom, JoinGame,
} from './components';
import store from './store';
import GamePage from './components/gamePage';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/account" component={LoggedIn} />
          <Route exact path="/create" component={CreateGame} />
          <Route exact path="/loading-game" component={LoadingGame} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/waiting" component={WaitingRoom} />
          <Route exact path="/" component={LandingPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

const app = document.querySelector('#app');

ReactDom.render(
  <App />,
  app,
);
