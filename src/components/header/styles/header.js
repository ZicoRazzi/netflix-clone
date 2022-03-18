import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-blend-mode: multiply;
  border-bottom: 8px solid #222;
  height: 709px;
  /* &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.3);
    background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    );
  } */
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 56px;
  height: 100px;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3rem;
  width: 100%;
  height: 10rem;
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52.2%;
  margin: 0 auto;
  height: 600px;
  color: #fff;
  padding-top: 8rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.2;
  margin: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 1.625rem;
  margin: 0;
`;
export const Nav_2 = styled.form``;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  padding: 0 26px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: -4rem;
`;
