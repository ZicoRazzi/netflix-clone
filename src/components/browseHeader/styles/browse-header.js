import styled from "styled-components/macro";
import Joker from "../../../images/joker1.jpg";

export const Background = styled.div`
  width: 100%;
  background-image: url(${Joker});
  background-size: cover;
  @media (max-width: 676px) {
    height: 500px;
    background-size: contain;
    background-repeat:  no-repeat;

  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;
  margin: 0 56px;
  height: 100px;
  padding: 150px 0 500px 0;
  width: 50%;
  /* a {
    display: flex;
  } */
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.h2`
   color: #fff;
   font-size: 50px;
   line-height: normal;
   font-weight: bold;
   text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
   margin-bottom: 20px;
`

export const Text = styled.p`
   color: #fff;
   font-size: 22px;
   line-height: 1.4;
   letter-spacing: 1.2px;
   text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
   margin: 0;
`

