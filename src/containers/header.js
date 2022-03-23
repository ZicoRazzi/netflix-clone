import React from 'react';
import { Header } from '../components';
import { NetflixLogo } from '../Logos/NetflixLogo';
import './styles.css';

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

          <form className="header-form">
            <Header.Input placeholder="Email address" />
            <Header.Button>Get Started</Header.Button>
          </form>
        </Header.Hero>
      </Header.Frame>
      {children}
    </Header>
  );
}
