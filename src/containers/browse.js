import React, { useState, useEffect, useContext } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading, BrowseHeader, Header } from "../components";
import { NetflixLogo } from "../Logos/NetflixLogo";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log(user)
  useEffect(() => {
    console.log("profile:", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <BrowseHeader>
        <Header.Frame>

          <Header.Nav>
          <Header.Group>

              <Header.Logo to="/">
                <NetflixLogo />
              </Header.Logo>
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Movies</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Profile>
                    <Header.Picture  src={user.photoURL} />
                    <Header.Dropdown>
                      <Header.DropdownProfile>
                      <Header.Picture  src={user.photoURL} />
  
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                      </Header.DropdownProfile>
                    
                    </Header.Dropdown>
                </Header.Profile>
              </Header.Group>

          </Header.Nav>

        </Header.Frame>
        <BrowseHeader.Feature>
          <BrowseHeader.Title>Watch Joker Now</BrowseHeader.Title>
          <BrowseHeader.Text>
            Arthur Fleck works as a clown and is an aspiring stand-up comic. He
            has mental health issues, part of which involves uncontrollable
            laughter. Times are tough and, due to his issues and occupation,
            Arthur has an even worse time than most. Over time these issues bear
            down on him, shaping his actions, making him ultimately take on the
            persona he is more known as...Joker.
          </BrowseHeader.Text>
        </BrowseHeader.Feature>
      </BrowseHeader>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
