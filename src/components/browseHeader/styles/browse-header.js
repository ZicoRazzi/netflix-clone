import styled from "styled-components/macro";
import Valhalla from "../../../images/valhalla.jpg";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${Valhalla});
  background-size: cover;

  @media (max-width: 767px) {
    height: 400px;
    /* background-size: contain; */
    background-repeat: no-repeat;
    margin-bottom: 100px;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  /* opacity: 1;
  z-index: 99; */
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 1.4;
  letter-spacing: 1.2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  
  /* opacity: 1;
  z-index: 99; */
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.5 ease;

  &:hover{
    background-color: #ff1e1e;
    color: #fff;
  }

`