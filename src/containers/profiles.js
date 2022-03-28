import React from 'react'
import { Header } from '../components'
import { NetflixLogo } from '../Logos/NetflixLogo';
import { Profiles } from '../components'

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
        <Header.Nav>
          <Header.Logo to="/">
            <NetflixLogo />
          </Header.Logo>
        </Header.Nav>
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User 
            onClick={() =>setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL
            })}
          >
            <Profiles.Picture src={user.photoURL} />

            <Profiles.Name>{user.displayName}</Profiles.Name>

            
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}