import React from 'react';
import { Header } from '../components';
import { NetflixLogo } from '../Logos/NetflixLogo';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Nav>
          <Header.Logo to="/">
            <NetflixLogo />
          </Header.Logo>
          <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
        </Header.Nav>

        <Header.Hero>
          <Header.Title>
            Unlimited films, TV <br />
            programmes and more.
          </Header.Title>
          <Header.SubTitle>Watch anywhere. Cancel at any time.</Header.SubTitle>
          <Header.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Header.Text>

          <Header.Nav>
            <Header.Input placeholder="Email address" />
            <Header.Button>Get Started</Header.Button>
          </Header.Nav>
        </Header.Hero>
      </Header.Frame>
      {children}
    </Header>
  );
}
