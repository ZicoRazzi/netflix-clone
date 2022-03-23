import React from 'react';
import { Header } from '../components';
import { NetflixLogo } from '../Logos/NetflixLogo';
import './styles.css';

export function SigninHeader({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Nav>
          <Header.Logo to="/">
            <NetflixLogo />
          </Header.Logo>
          {/* <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink> */}
        </Header.Nav>
      </Header.Frame>
      {children}
    </Header>
  );
}
