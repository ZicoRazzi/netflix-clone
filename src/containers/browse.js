import React, { useState, useEffect, useContext } from "react";
import Fuse from 'fuse.js'
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading, BrowseHeader, Header, Card, Player } from "../components";
import { NetflixLogo } from "../Logos/NetflixLogo";
import { useNavigate } from 'react-router-dom'

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series')
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('')
  const [slideRows, setSlideRows] = useState([]);
  const navigate = useNavigate()

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log(user);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map((item) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);
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
              <Header.TextLink
                active={category === 'series' ? 'true' : 'false'}
                onClick={() => setCategory('series')}
              >Series</Header.TextLink>
              <Header.TextLink
                active={category === 'films' ? 'true' : 'false'}
                onClick={() => setCategory('films')}
              >Movies</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.DropdownProfile>
                    <Header.Picture src={user.photoURL} />

                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.DropdownProfile>
                  <Header.Group>
                <Header.TextLink 
                onClick={() => firebase.auth().signOut(navigate('/signin'))}>
                      Sign out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Nav>
        </Header.Frame>
        <BrowseHeader.Feature>
          <BrowseHeader.Title>Vikings: Valhalla</BrowseHeader.Title>
          <BrowseHeader.Text>
          Set one hundred years after the events of Vikings, as tensions between the Vikings and the English royals reach a bloody breaking point and as the Vikings themselves clash over their conflicting Christian and Pagan beliefs. 
          </BrowseHeader.Text>
          <BrowseHeader.PlayButton>Play</BrowseHeader.PlayButton>
        </BrowseHeader.Feature>
      </BrowseHeader>

      <Card.Group>
            {slides[category].map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={require(`../images/${category}/${item.genre}/${item.slug}/small.jpg`)}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                <Player>
                <Player.Button />
                <Player.Video src="../videos/bunny.mp4" />
              </Player>
                </Card.Feature>
              </Card>
            ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
