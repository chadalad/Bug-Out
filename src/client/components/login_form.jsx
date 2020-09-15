import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../store/thunks/loginThunks';
import Login from './login/login';
import Logout from './login/logout';

const LoginForm = ({ user, whoAmI }) => {
  useEffect(() => {
    const getData = async () => {
      await whoAmI();
    };
    getData();
  }, []);

  const showLoginOrLogout = () => (user.loggedIn ? <Logout /> : <Login />);

  return <div>{showLoginOrLogout()}</div>;
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
