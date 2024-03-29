import React from 'react';
import JumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return(
<Jumbotron.Container>
        {JumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={require(`../images/${item.image}`)}
                alt={item.alt}
              />
              
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
  )
}