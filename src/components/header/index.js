import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import HeaderBG from '../../images/home-bg.jpg';
import ChevronRight from '../../icons/chevron-right.png';
import {
  Container,
  Background,
  ButtonLink,
  Hero,
  Title,
  SubTitle,
  Input,
  Button,
  Text,
  Nav,
  Content,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background
      data-testid="header-bg"
      {...restProps}
      style={{
        backgroundImage: `url(${HeaderBG})`,
      }}
    >
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return <ReachRouterLink to={to}>{children}</ReachRouterLink>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Content = function HeaderForm({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Header.Input = function HeaderInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src={ChevronRight} alt="Try Now" />
    </Button>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
