import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../store/thunks/loginThunks';

const LoggedIn = ({ user, whoAmI }) => {
  useEffect(() => {
    const getData = async () => {
      await whoAmI();
    };
    getData();
  }, []); // empty array calls it once
  const { loggedIn } = user;

  return (
    <div>
      <h3>{loggedIn ? 'You are logged in.' : 'Failed to login.'}</h3>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
