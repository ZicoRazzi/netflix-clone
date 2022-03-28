import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-blend-mode: multiply;
  border-bottom: 8px solid #222;
  height: 809px;
  @media (max-width: 676px) {
    height: 500px;
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

  @media (max-width: 767px) {
    padding-top: 1.4rem;
  }
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (max-width: 767px) {
    height: 24px;
    width: 88px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1.1rem;
  border-radius: 3px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
  @media (max-width: 676px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.3rem;
    width: 66px;
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
  @media (max-width: 676px) {
    width: 100%;
    padding-top: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.2;
  margin: 1rem;
  @media (max-width: 676px) {
    font-size: 1.625rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.625rem;
  margin: 0;
  @media (max-width: 676px) {
    font-size: 1.1rem;
  }
`;
export const Content = styled.div``;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 676px) {
    height: 50px;
    font-size: 16px;
    width: 100%;
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
    font-size: 14px;
    margin-top: 20px;
    font-weight: bold;
    width: 9rem;
    padding: 0 1rem;
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
  @media (max-width: 676px) {
    font-size: 1.1rem;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-left: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    color: #8e8e8e;
  }
`;

export const Dropdown = styled.div`
  display: none;
  /* background-color: #000; */
  background: rgba(0, 0, 0, 0.8);

  position: absolute;
  padding: 20px 10px 0;
  width: 220px;
  height: 200px;
  top: 32px;
  right: 0;
  transition: all 0.3s ease;
`;
export const DropdownProfile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const Picture = styled.img`
  background-size: contain;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #fff;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  color: #fff;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
