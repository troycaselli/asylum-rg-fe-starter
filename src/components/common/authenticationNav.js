import React from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import SignupButton from './signupButton';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/NavButtons.less';

const AuthenticationNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <div id="auth-button-switch">
          <LoginButton />
          <SignupButton />
        </div>
      )}
    </div>
  );
};

export default AuthenticationNav;
