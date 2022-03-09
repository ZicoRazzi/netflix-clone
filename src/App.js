import React from 'react';
import Jumbotron from './components/jumbotron/Jumbotron';
import JumboData from './fixtures/jumbo.json';
// import HomeTV from './images/home-tv.jpg';

function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {JumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={require(`./images/${item.image}`)}
                alt={item.alt}
              />
              {/* <Jumbotron.Image src={item.image} alt={item.alt} /> */}
              {/* <div className="image">
                <img src={HomeTV} alt="" />
              </div> */}
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
